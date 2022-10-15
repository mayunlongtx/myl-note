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
        { text: "npm私有化", link: "/pages/notes/npm/packagePublish" },
        { text: "npm包发布", link: "/pages/notes/npm/packagePublish" },
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
   
  ],
};

export default sidebar;
