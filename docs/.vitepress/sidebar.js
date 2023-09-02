const sidebar = {
  "/pages/vim/": [
    {
      text: "Vim",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/vim/" },
        { text: "认识Vim", link: "/pages/vim/knowVim" },
        { text: "行相关命令", link: "/pages/vim/commandLine" },
        { text: "语法", link: "/pages/vim/grammar" },
      ],
    },
  ],
  "/pages/tools/": [
    {
      text: "Tool",
      collapsible: true,
      items: [{ text: "工具地址", link: "/pages/tools/index" }],
    },
  ],
  "/pages/learning/": [
    {
      text: "面试题",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/learning/" },
        { text: "HTML", link: "/pages/learning/html" },
        { text: "JS", link: "/pages/learning/js" },
        { text: "VUE", link: "/pages/learning/vue" },
      ],
    },
  ],
  "/pages/notes/": [
    {
      text: "npm",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/learning/" },
        { text: "常用命令", link: "/pages/notes/npm/npmCommand" },
        { text: "私有化", link: "/pages/notes/npm/privateNpm" },
        { text: "包发布", link: "/pages/notes/npm/packagePublish" },
        { text: "nrm", link: "/pages/notes/npm/nrm" },
      ],
    },
    {
      text: "node",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "pm2",
          link: "/pages/notes/node/pm2",
        },
      ],
    },
    {
      text: "问题",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "小程序",
          link: "/pages/notes/applet/issue",
        },
      ],
    },
   
  ],
  "/pages/test/": [
    {
      text: "基础",
      collapsible: true,
      items: [
        { text: "为什么写测试", link: "/pages/test/basic/whyWriteTest" },
        { text: "单元测试在修改代码时的好处", link: "/pages/test/basic/editCodeAdvantage" },
      ],
    },
    {
      text: "Vue-项目实战",
      collapsible: true,
      items: [
        { text: "项目概述", link: "/pages/test/actualCombat/Vue/index" },
      ],
    },
  ],
};

export default sidebar;
