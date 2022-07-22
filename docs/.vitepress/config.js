import nav from "./nav";
import sidebar from "./sidebar";
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "mayunlongtx",
  description: "龙宝的笔记",
  themeConfig: {
    // siteTitle: "mayunlongtx",
    outlineTitle: "目录",
    // logo: "/public/logo.jpg",
    footer: {
      message: "mayunlongtx",
      copyright: "学习笔记",
    },
    // 跳转一个编辑地址
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
    // siteTitle: false,
    // lastUpdated: true,
    lastUpdatedText: "最后更新", // 最后更新时间文本, 需配置 lastUpdated 为 true
    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    nav,
    socialLinks: [{ icon: "github", link: "https://github.com/mayunlongtx" }],
    sidebar,
  },
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
};

export default config;
