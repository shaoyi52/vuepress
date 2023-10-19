import{_ as e,o as a,c as i,e as r}from"./app-3cd67f89.js";const t={},n=r('<h1 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h1><p>页面是前端直接呈现给用户的界面，用户依赖页面与应用进行交互。当页面发生卡顿时，会引起用户的焦虑情绪；而当页面发生白屏时，用户与应用的交互将被直接阻断，导致线上缺陷。除此之外，对于页面中的一些不阻塞交互的JavaScript报错，也需要进行关注，在问题爆发前将其解决。</p><p>随着页面的数量增多，开发环境的测试并不能有效排除代码中存在的性能和质量隐患。当生产环境出现性能或流程阻塞问题时，就会引发用户投诉。开发人员需要一套能够持续监控性能和异常的页面监控系统，提前发现线上异常问题，快速定位并解决。</p><p>页面监控包括性能监控、异常监控、白屏监控、卡顿监控、用户行为监控。</p><h2 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控" aria-hidden="true">#</a> 性能监控</h2><p>页面性能直接影响用户的实际体验。研究表明：用户最满意的打开网页时间是2～5s，如果等待时间超过10s，那么多数用户会关闭这个网页。性能是影响用户体验至关重要的因素，也是开发人员重点关注的部分。</p><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><p>性能往往是由多方面因素共同决定的，页面打开的速度只是最终呈现的结果。如果开发人员想衡量页面的性能，就必须建立一套能够客观衡量的指标，并基于这些指标完善监控系统。</p><h4 id="performance-api" tabindex="-1"><a class="header-anchor" href="#performance-api" aria-hidden="true">#</a> Performance API</h4><p>W3C在2010年8月成立了Web Performance Working Group，其目的是提供可以衡量页面性能的API，这个API就是window.performance。</p><p>window.performance会返回一个Performance类型的对象，其中，performance.timing包含了各种与浏览器性能有关的时间数据，提供浏览器各处理阶段的耗时。</p><h5 id="属性详解" tabindex="-1"><a class="header-anchor" href="#属性详解" aria-hidden="true">#</a> 属性详解</h5><p>浏览器加载页面的过程被区分成了9个阶段，performance.timing将每个阶段的关键节点发生变更时的毫秒时间戳都进行了标记，每个节点的时间戳的含义如下。</p><ul><li><p>navigationStart：在同一个浏览器上下文中，前一个页面卸载结束时的时间戳。如果没有前一个页面，这个值会和fetchStart相同。</p></li><li><p>unloadStart：unload事件发生时的时间戳。如果没有前一个页面，或者前一个页面的域名或重定向过程中的某个域名与当前域名不同源，则返回值为0。</p></li><li><p>unloadEnd：unload事件结束时的时间戳。如果没有前一个页面，或者前一个页面的域名或重定向过程中的某个域名与当前域名不同源，则返回值为0。</p></li><li><p>redirectStart：第一个HTTP开始重定向时的时间戳。如果没有重定向，或者重定向过程中的某一个域名不同源，则返回值为0。</p></li><li><p>redirectEnd：第一个HTTP重定向结束时的时间戳。如果没有重定向，或者重定向过程中的某一个域名不同源，则返回值为0。</p></li><li><p>fetchStart：浏览器准备好使用HTTP请求获取文档时的时间戳。</p></li><li><p>domainLookupStart：域名查询开始时的时间戳。如果使用了持久连接，或者域名查询的信息已经存储到了缓存或者本地资源上，则这个值将和fetchStart相同。</p></li><li><p>domainLookupEnd：域名查询结束时的时间戳。如果使用了持久连接，或者域名查询的信息已经存储到了缓存或者本地资源上，则这个值将和fetchStart相同。</p></li><li><p>connectStart：HTTP开始向服务器发送请求时的时间戳。如果使用了持久连接，或者域名查询的信息已经存储到了缓存或者本地资源上，则这个值将和fetchStart相同。</p></li><li><p>connectEnd：浏览器与服务器之间建立连接时的时间戳。如果使用了持久连接，或者域名查询的信息已经存储到了缓存或者本地资源上，则这个值将和fetchStart相同。连接建立指所有握手和认证过程全部结束。</p></li><li><p>secureConnectionStart：浏览器与服务器开始安全连接的握手时的时间戳。如果当前网页不需要建立安全连接，则返回值为0。</p></li><li><p>requestStart：浏览器向服务器发出HTTP请求时的时间戳。</p></li><li><p>responseStart：浏览器从服务器收到（或从本地缓存读取）第一字节时的时间戳。如果传输层在开始请求之后失败并且连接被重新发起，则该属性将被重置为新请求的发起时间。</p></li><li><p>responseEnd：浏览器从服务器收到（或从本地缓存/资源读取）最后一字节时（如果在此之前HTTP连接已经关闭，则返回关闭时）的时间戳。</p></li><li><p>domLoading：当前网页DOM结构开始解析时，即document.readyState属性变为loading，相对应的readystatechange事件触发时的时间戳。</p></li><li><p>domInteractive：当前网页DOM结构解析结束，开始加载内嵌资源时，即document.readyState属性变为interactive，相应的readystatechange事件触发时的时间戳。</p></li><li><p>domContentLoaded：该事件由domContentLoadedEventStart和domContentLoadedEventEnd两部分组成。domContentLoadedEventStart代表解析器发送domContentLoaded事件，即所有需要被执行的脚本已经被解析时的时间戳。domContentLoadedEventEnd代表所有需要立即执行的脚本已经被执行（不论执行顺序）时的时间戳。</p></li><li><p>domComplete：当前文档解析完成时，即document.readyState变为complete时，相对应的readystatechange事件触发时的时间戳。</p></li><li><p>loadEventStart：load事件被发送时的时间戳。如果这个事件还未被发送，则返回值为0。</p></li><li><p>loadEventEnd：load事件结束，即加载事件完成时的时间戳。如果load事件还未被发送，或者尚未完成，则返回值为0。</p></li></ul><p>通过对以上指标取差值，可以得到每个阶段耗费的时间，从而建立更加直观的指标，部分示例如下。</p><ul><li><p>重定向耗时：redirectEnd-redirectStart。</p></li><li><p>DNS解析耗时：domainLookupEnd-domainLookupStart。</p></li><li><p>TCP连接耗时：connectEnd-connectStart。</p></li><li><p>SSL安全连接耗时：connectEnd-secureConnectionStart。</p></li></ul><p>除此之外，performance还提供了getEntries方法，它会返回一个PerformanceEntry对象数组，用于记录浏览器的绘制、资源加载等行为，可以借助它获取一些更复杂的指标。</p><h3 id="核心性能指标" tabindex="-1"><a class="header-anchor" href="#核心性能指标" aria-hidden="true">#</a> 核心性能指标</h3><p>核心Web指标的构成会随着时间的推移而发展。2020年的指标构成侧重于用户体验方面的加载性能、交互性和视觉稳定性，核心性能指标（及各指标相应的阈值）</p><ul><li><p>最大内容绘制（Largest Contentful Paint，LCP）测量加载性能。为了提供良好的用户体验，LCP应在页面首次开始加载后的2.5s内发生。</p></li><li><p>首次输入延迟（First Input Delay，FID）测量交互性。为了提供良好的用户体验，页面的FID应为100ms或更短。</p></li><li><p>累积布局偏移（Cumulative Layout Shift，CLS）测量视觉稳定性。为了提供良好的用户体验，页面的CLS值应保持在0.1或更少。</p></li></ul><p>开源工具库web-vitals，开发人员可以在项目中引入、调用相应方法，获取对应的性能指标数据。</p><h3 id="其他指标" tabindex="-1"><a class="header-anchor" href="#其他指标" aria-hidden="true">#</a> 其他指标</h3><p>除了以上三个核心指标，其余的指标也可以帮助开发人员有效衡量性能状况。它们可以作为核心指标的补充，帮助开发人员获取更多的信息，排查出特定的问题。</p><ul><li><p>总阻塞时间（Total Blocking Time，TBT）指FCP与可交互时间之间的总时间，因为这期间主线程被阻塞的时间过长，无法对用户行为做出响应。每当出现长任务（在主线程上运行超过50ms的任务）时，主线程都被视作阻塞。如果阻塞时间过长（如超过50ms），那么用户很可能注意到延迟，并认为页面缓慢或卡顿。</p></li><li><p>可交互时间（Time To Interactive，TTI）指页面从开始加载到主要子资源完成渲染，并能够快速、可靠地响应用户输入所需的时间。它能够有效评估当前页面需要多久才能进入可评估状态。</p></li><li><p>首次有意义绘制（First Meaningful Paint，FMP）代表页面中有意义的主要元素渲染出来的时间。由于FMP的计算方式极为复杂，并且不同网站之间可能存在差异，开发人员很难有效定义什么是有意义的绘制，所以Google推荐使用LCP代替FMP。</p></li></ul><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><p>因为用户交互会影响TBT、TTI的结果，所以不建议在生产环境中检测，一般推荐在开发环境下使用lighthouse进行测量。如果需要衡量生产环境的可交互性，那么建议使用FID指标代替。</p><h2 id="异常监控" tabindex="-1"><a class="header-anchor" href="#异常监控" aria-hidden="true">#</a> 异常监控</h2><p>代码异常监控的目的是发现已经存在的代码隐患，根据报错信息对线上问题进行定位和修复。如果开发人员要发现线上错误，那么首先需要对线上发生的错误进行采集。</p><p>页面的异常情况包括包括很多，比如常见的资源加载错误、同步错误、异步错误等...这些错误会引发页面的逻辑异常甚至白屏。然而很多情况都是</p><h3 id="错误采集" tabindex="-1"><a class="header-anchor" href="#错误采集" aria-hidden="true">#</a> 错误采集</h3><p>如果需要进行全局JavaScript异常监控，就需要用到<code>window.onerror</code>和<code>window.addEventListener（&#39;error&#39;）</code>。</p><p>如果我们自行开发错误采集功能过于复杂，而且需要考虑很多场景的特殊处理，比如跨域。算上以后的维护成本，总体来看成本过高，市面上有很多现成的监控工具可以使用比如fundebug，搭配数据看板，对于线上异常问题一目了然。配合SourceMap映射源代码，可以迅速定位具体报错位置。从而进行处理。</p><h2 id="用户行为监控" tabindex="-1"><a class="header-anchor" href="#用户行为监控" aria-hidden="true">#</a> 用户行为监控</h2><p>用户行为监控指对用户在页面上的操作行为进行采集，记录用户每次会话过程中的操作路径，从而还原用户的使用场景、操作规律、访问路径及行为特点。</p><h3 id="收益" tabindex="-1"><a class="header-anchor" href="#收益" aria-hidden="true">#</a> 收益</h3><p>利用采集到的用户行为信息，可以带来以下收益。</p><ul><li><p>对产品而言，帮助验证产品的可行性，研究产品决策，清楚地了解用户的行为习惯，并找出产品的缺陷，以便迭代与优化需求。</p></li><li><p>对设计而言，帮助增加体验的友好性，匹配用户情感，细腻地贴合用户的个性服务，并发现交互的不足，以便完善与改进设计。</p></li><li><p>对运营而言，帮助裂变增长的有效性，实现精准营销，全面地挖掘用户的使用场景，并分析运营的问题，以便转变与调整决策。</p></li><li><p>对研发而言，帮助确定错误的操作路径，精准定位问题根因，从而快速修复难以复现的问题，以便保障页面的稳定性。这部分一般第三方监控平台都有提供。</p></li></ul><h3 id="数据埋点" tabindex="-1"><a class="header-anchor" href="#数据埋点" aria-hidden="true">#</a> 数据埋点</h3><h4 id="命令式埋点" tabindex="-1"><a class="header-anchor" href="#命令式埋点" aria-hidden="true">#</a> 命令式埋点</h4><p>命令式埋点也叫代码埋点，是最原始、最普遍的一种埋点方式，在代码中需要埋点的位置直接调用日志统计接口，发送指定格式的日志数据。</p><h5 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h5><p>命令式埋点的优点是实现方案足够简单，但是缺点也同样明显，缺点如下</p><ul><li><p>对业务代码有很强的侵入性。</p></li><li><p>需要开发人员大量的重复性劳动。</p></li><li><p>如果想清除一些临时性的日志埋点则需要开发人员</p></li></ul><h4 id="声明式埋点" tabindex="-1"><a class="header-anchor" href="#声明式埋点" aria-hidden="true">#</a> 声明式埋点</h4><p>日志埋点可以抽象为三元素：DOM、数据和请求。命令式埋点最主要的缺陷是日志请求由DOM的交互逻辑代码直接调用，进而形成与业务代码的强耦合关联。</p><p>声明式埋点是在命令式埋点基础上的进一步抽象，在日志请求和DOM交互之间建立了一层抽象逻辑。声明式埋点只关注两个元素：DOM和数据，而日志请求则由抽象层完成。比如Vue中使用自定义指令。</p><h5 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h5><p>声明式埋点虽然在一定程度上弱化了埋点代码和业务代码之间的耦合度，但仍然是一种侵入式方案，并且依赖一定的技术栈选型。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>目前业界不乏一些为解决此等缺陷的埋点方案，比如以Mixpanel为代表的无痕埋点、以GrowingIO为代表的无埋点等。这类方案虽然在一定程度上解决了声明式埋点的缺陷，但同时也存在实施成本太高、产生冗余数据、精细度不足等负面影响。截至目前，仍然没有一种被广泛认可且相对统一的新型埋点方案，期待未来技术的发展可以带来更优的选择。</p>',50),d=[n];function p(l,o){return a(),i("div",null,d)}const c=e(t,[["render",p],["__file","index.html.vue"]]);export{c as default};