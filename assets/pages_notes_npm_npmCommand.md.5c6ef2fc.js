import{_ as s,c as n,o as a,d as l}from"./app.0c40e341.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/notes/npm/npmCommand.md"}'),p={name:"pages/notes/npm/npmCommand.md"},e=l(`<div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//  \u521B\u5EFA\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">npm adduser</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">npm login</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u67E5\u770B\u662F\u5426\u767B\u5F55\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">npm whoami</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u9000\u51FA\u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">npm logout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u67E5\u770B\u5168\u5C40node\u5305\u5B89\u88C5\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">npm root </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u67E5\u770Bnode\u5B89\u88C5\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">npm get prefix</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u67E5\u770B\u5F53\u524D\u76EE\u5F55\u4E0B\u5B89\u88C5\u4E86\u90A3\u4E9Bnode\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">npm ls</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// npm \u53D1\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;"> npm publish </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u6CE8\u610F\u7248\u672C\u53F7\u548C\u5305\u540D\u79F0\u662F\u5426\u5360\u7528</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5305\u7684\u540D\u79F0\u548C\u7248\u672C\u5C31\u662F\u4F60\u9879\u76EE\u91CCpackage.json\u91CC\u7684name\u548Cversion\u54E6\uFF01</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u8FD8\u6709\u4E00\u70B9\u8981\u6CE8\u610F\u7684\u662Fnpm\u5BF9\u5305\u540D\u7684\u9650\u5236\uFF1A\u4E0D\u80FD\u6709\u5927\u5199\u5B57\u6BCD/\u7A7A\u683C/\u4E0B\u6ED1\u7EBF!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5305\u6587\u4EF6 \u4E0D\u8BB8\u542B\u6709README.md  package.json  index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// npm \u64A4\u9500\u53D1\u5E03\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">npm unpublish </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">pkg</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[@</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">force</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u62A5\u6743\u9650\u65B9\u9762\u7684\u9519\uFF0C\u52A0\u4E0A--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//npm \u67E5\u770B\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u67E5\u770B\u7528\u6237\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config get userconfig</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u67E5\u770B\u5168\u5C40\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config get globalconfig</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5185\u7F6E\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5B89\u88C5npm\u7684\u76EE\u5F55\u4E0B\u7684npmrc\u6587\u4EF6\u3002</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,1),c=[e];function o(r,t,i,m,b,y){return a(),n("div",null,c)}var A=s(p,[["render",o]]);export{C as __pageData,A as default};
