const fs = require("fs");
const path = require("path");

export function getSidebarList(dir = "") {
  const mdFiles = getMdfile("../pages");
  console.log("mdFiles--->", mdFiles);
  // 这里处理数据 只取地址的 /pages/xxx/ 作为第一层的名称以及地址
  let newSidebar = {};
  mdFiles.forEach((item) => {
    const file = item.replace("..", "");

    // if(!newList[result]) {
    //   newList[result]
    // }
    const fileArr = file.split("/").filter((item) => item);
    const parentName = `/${fileArr[0]}/${fileArr[1]}/`;
    // 这里获取到 md 文件内容中的标题
    // 这里需要判断一下 只需要获取
    // console.log('fileContent--->', getText(item));
    // 这里只获取首页的名称 不是 index.md 的文件不去获取
    let text = "";
    if (file.indexOf("index.md") > 0) {
      const pattern1 = /^(.*\/)/;
      const result1 = pattern1.exec(file);
      if(result1) {
        console.log('result1---->',result1[1]);
      }
      
        const obj = {
          text: getText(item) || "未知",
          collapsible: true,
          items: [],
        };
        const pattern = /^(\/[^\/]+\/[^\/]+\/)/;
        const result = pattern.exec(file);
        if (result) {
          if (!newSidebar[result[1]]) {
            newSidebar[result[1]] = [];
          }
          newSidebar[result[1]].push(obj);
        }
      console.log(newSidebar);
    } else {
      // 这里处理不是首页的逻辑 然后需要给他们都追加到对应的数组中去 是不是可以认为每个下级目录都是一个 子的目录 然后在里边配置对应的index
    }
    // console.log(parentName);
    // 这里需要处理几种数据结构，需要判断
    // 第一层全部取前两个的
  });
}
function getCategory(dir) {
  const categories = dir.split("/");
  return categories[categories.length - 1];
}
/**
 *
 * @param {文件路径} dir ../pages
 * @returns md 文件数组 resultArr ['../pages/learning/html.md']
 */
function getMdfile(dir = "docs") {
  const root = path.join(__dirname, dir); // Markdown 文件目录
  const files = fs.readdirSync(root).filter((f) => !f.includes("DS_Store"));
  const resultArr = [];
  // .filter(f => f.endsWith('.md')) // 获取所有 Markdown 文件
  files.forEach((file) => {
    let filePath = dir + "/" + file; // 当前文件 | 文件夹的路径

    if (file.indexOf(".md") >= 0) {
      resultArr.push(filePath);
      return;
    }
    // 如果不是需要的文件 就继续深度递归查询
    // console.log('root + filePath--->', filePath);
    if (fs.statSync(root).isDirectory()) {
      resultArr.push(...getMdfile(filePath));
    }
  });
  return resultArr;
}
function delLastStr(str) {
  const index = str.lastIndexOf("/");
  const result = str.substring(0, index); // 从 0 开始截取到 index（不包括 index）
  return result;
}
function getText(dir) {
  const root = path.join(__dirname, dir); // Markdown 文件目录
  const fileContent = fs.readFileSync(root, "utf-8");
  const pattern = /<!--\s*(.*?)\s*-->/;
  const content = fileContent.match(pattern);
  return content ? content[1] : "";
}
