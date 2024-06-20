const nav = [
  {
    // text: "键盘侠养成记 🐣",
    text: "键盘侠养成记",
    link: "/pages/vim/knowVim",
  },
  {
    // text: "面试题 📋",
    text: "面试题",
    link: "/pages/learning/html",
  },
  // {
  //   // text: "开发配置 📔",
  //   text: "开发配置",
  //   link: "/pages/notes/my-settings/development",
  // },
  {
    // text: "笔记 📔",
    text: "笔记",
    items: [
      {
        text: "有道笔记",
        items: [
          {
            text: "地址合集",
            link: "https://note.youdao.com/s/9nXzzfOc",
          },
        ]
      },
      {
        text: "其他记录",
        // link: "/pages/notes/npm/npmCommand",
        items: [
          {
            text: "笔记",
            link: "/pages/notes/npm/npmCommand",
          },
          {
            text: "ChatGPT",
            link: "https://chat.gpt.myltx.top/",
          },
          {
            text: "lodeChat",
            link: "https://lodechat.myltx.top/",
          },
        ]
      },
      

    ]
    
  },
  {
    text: "我的平台",
    items: [
      {
        text: "Github",
        link: "https://github.com/myltx",
      },
      {
        text: "掘金",
        link: "https://juejin.cn/user/2524134428904894/posts",
        // icon: {
        //   svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        // },
      },
      {
        text: "CSDN",
        link: "https://blog.csdn.net/M_J_BlackCloud?spm=1010.2135.3001.5343",
      },
    ],
  },
];

export default nav;
