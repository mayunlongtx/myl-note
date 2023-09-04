const fs = require("fs");
const path = require("path");

export function getSidebarList(dir = '') {
  const mdFiles = getMdfile('../pages')
  console.log('mdFiles--->', mdFiles);
  mdFiles.forEach(item => {
    const file = item.replace('..', '')
    const fileArr = file.split('/').filter(item => item)
    const parentName = `/${fileArr[0]}/${fileArr[1]}/`
    // 这里获取到 md 文件内容中的标题
    // 这里需要判断一下 只需要获取
    
    console.log('fileContent--->', getText(item));
    // console.log(parentName);
    // 这里需要处理几种数据结构，需要判断
    // 第一层全部取前两个的
  })
}
function getCategory(dir) {
  const categories = dir.split('/')
  return categories[categories.length - 1]
}
/**
 * 
 * @param {文件路径} dir ../pages
 * @returns md 文件数组 resultArr ['../pages/learning/html.md']
 */
function getMdfile(dir = 'docs') {
  const root = path.join(__dirname, dir) // Markdown 文件目录
  const files = fs.readdirSync(root).filter(f => !f.includes('DS_Store'))
  const resultArr = [];
  // .filter(f => f.endsWith('.md')) // 获取所有 Markdown 文件
  files.forEach(file => {
    let filePath =  dir + '/' + file; // 当前文件 | 文件夹的路径
    
    if(file.indexOf('.md') >= 0) {
      resultArr.push(filePath)
      return
    }
    // 如果不是需要的文件 就继续深度递归查询
    // console.log('root + filePath--->', filePath);
    if (fs.statSync(root).isDirectory()) {
      resultArr.push(...getMdfile(filePath));
    }
  })
  return resultArr;
}
function delLastStr(str) {
  const index = str.lastIndexOf('/');
  const result = str.substring(0, index); // 从 0 开始截取到 index（不包括 index）
  return result
}
function getText(dir) {
  const root = path.join(__dirname, dir) // Markdown 文件目录
  const fileContent = fs.readFileSync(root, 'utf-8')
  const content =  fileContent.match(/^##\s+(.*)/m)
  return content ? content[1] : ''
}