import{_ as l,o as e,c as t,e as i}from"./app-dfed1ad6.js";const n={},o=i(`<h2 id="html-页面渲染过程" tabindex="-1"><a class="header-anchor" href="#html-页面渲染过程" aria-hidden="true">#</a> html 页面渲染过程</h2><ol><li>解析 html 文件，创建 DOM 树 　　自上而下解析，遇到任何样式（link、style）和脚本（script）都会阻塞 　　 1）css 加载不会阻塞 html 文件的解析，但会阻塞 dom 的渲染 　　 2）css 加载会阻塞后面 js 语句的执行 　　 3）js 会阻塞 html 的解析和渲染 　　 4）没有 defer 和 async 标签的 script 会立即加载并执行 　　 5）有 async 标签的 js，js 的加载执行和 html 的解析和渲染并行 　　 6）有 defer 标签的 js，js 的加载和 html 的解析和渲染并行，但会在 html 解析完成后执行,在触发 DOMContentLoaded 事件前执行 　　 7）DOMContentLoaded 和 onload 的区别：DOMContentLoaded 在 html 解析完毕后执行，loload 在页面完全加载完成后执行（包括样式和图片）</li><li>解析 css，生成 CSSOM，css 对象模型 首先将根据样式重要性排序，由低到高依次为： 1）浏览器声明 2）用户普通声明 3）作者普通声明 4）作者重要声明 5）用户重要声明 对于同一重要级别，则是根据 CSS 选择符的特指度来判定优先级；一条样式声明的特指度由以下四个部分决定：S-I-C-E 1）声明来自内联的 style 属性则 S+1； 2）声明中含有 id 属性则 I+1； 3）声明中含有类、伪类、属性选择器则 C+1； 4）生命中含有元素、伪元素选择器则 E+1；</li><li>dom 和 css 合并，构建渲染树（Render Tree）</li><li>布局（Layout）和绘制（Paint），重绘（repaint）和重排（reflow/回流） 　　 1）重绘：根据元素的新属性重新绘制，使元素呈现新的外观 　　 2）重排：当渲染树中的一部分因为元素的规模尺寸，布局，隐藏等改变而需要重新构建 　　 3）重排必定会引发重绘，但重绘不一定会引发重排</li></ol><ul><li>绘制顺序如下：</li></ul><ol><li>背景颜色</li><li>背景图片</li><li>边框</li><li>子呈现树节点</li><li>轮廓</li><li>补充：</li></ol><p>监听资源加载完成有四种方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>　　 1. window.onload = function(){....}
　　 2. window.addEventListener(&quot;load&quot;,function(){....});
　　 3. document.body.onload = function(){....}
　　 4. &lt;body onload = &quot;load()&quot;&gt;&lt;body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[o];function s(a,c){return e(),t("div",null,d)}const m=l(n,[["render",s],["__file","HTML页面渲染流程.html.vue"]]);export{m as default};
