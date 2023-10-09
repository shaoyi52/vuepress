import{_ as a,o as e,c as h,e as i}from"./app-6c156fba.js";const r={},d=i('<h1 id="测试保障" tabindex="-1"><a class="header-anchor" href="#测试保障" aria-hidden="true">#</a> 测试保障</h1><p>软件测试指使用人工或自动的手段来运行或测定某个软件的过程，以检验软件是否满足需求或找出预期结果与实际结果之间的差别，具体包括发现软件中的错误，对软件是否符合设计要求进行验证并评估软件的质量等，最终将高质量的软件交付给用户。</p><p>软件测试是保障软件工程的正确性、完整性、安全性和质量的手段。在规定的条件下进行软件测试，并根据其结果来判断软件是否符合预期，可以发现程序的错误，衡量软件的质量。软件测试的目的包括发现软件程序中的错误，判断软件是否符合设计要求及技术要求。进行软件测试不仅可以保障软件的质量，还可以为开发人员提供信息，方便其为风险评估做相应的准备，从而保证整个软件开发的过程都是高质量的</p><p>前端测试是软件测试的一部分，用来保障质量，提高系统可维护性。</p><h2 id="测试流程" tabindex="-1"><a class="header-anchor" href="#测试流程" aria-hidden="true">#</a> 测试流程</h2><h3 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h3><p>单元测试指对软件中的最小可测试单元进行检查和验证，通常由开发人员自行编写。它是软件开发过程中进行的最低级别的测试活动，软件的独立单元将在与程序的其他部分隔离的情况下进行测试。单元测试的目的是保障目标函数在以特定的条件进行输入时，输出的结果和开发人员的预期一致。</p><h4 id="覆盖率" tabindex="-1"><a class="header-anchor" href="#覆盖率" aria-hidden="true">#</a> 覆盖率</h4><p>单元测试的质量好坏可以通过代码覆盖率来判断，而代码覆盖率由语句覆盖率、行覆盖率、函数覆盖率、分支覆盖率4部分组成。</p><ul><li><p>语句覆盖率（Statement Coverage）用于衡量被测试代码中每条语句的执行覆盖情况。</p></li><li><p>行覆盖率（Line Coverage）用于衡量被测试代码中每行代码的执行覆盖情况，不包括空行和注释等。</p></li><li><p>函数覆盖率（Function Coverage）用于衡量被测试代码中的每个声明函数的执行覆盖情况。</p></li><li><p>分支覆盖率（Branch Coverage）用于衡量被测试代码中的每一个判定分支的执行覆盖情况。</p></li></ul><h4 id="意义" tabindex="-1"><a class="header-anchor" href="#意义" aria-hidden="true">#</a> 意义</h4><p>前端页面虽然经常变化，但是页面背后依赖的组件和工具函数都是比较稳定的，开发人员可以通过单元测试提升它们的可靠性和稳定性。当项目进行重构时，单元测试能有效保证代码重构前后逻辑的一致性，大大减少在测试环节中投入的精力。</p><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><p>单元测试的代码覆盖率可以作为衡量项目质量的指标之一，但不是全部。因为代码覆盖率100%只能保证代码的每个语句、分支都被运行过了，不能确保所有执行结果都符合预期。</p><p>除了代码覆盖率应尽量达到100%，单元测试还应该设计不同场景下的测试用例来尽量覆盖边界情况。</p><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4><p>开发人员在编写单元测试时，能够通过测试用例的执行路径来重新审视自己的代码，进而找出设计上的缺陷，帮助自己提升代码质量。开发人员既不能迷信单元测试的代码覆盖率，也不能完全忽视单元测试的重要性，应该以辩证的目光来看待它。</p><h3 id="功能测试" tabindex="-1"><a class="header-anchor" href="#功能测试" aria-hidden="true">#</a> 功能测试</h3><p>功能测试指根据产品的需求文档中的描述对功能进行测试，验证其程序的运行结果是否符合预期。当开发人员研发完某个功能后，需要通过所有冒烟测试。当所有主流程都“跑通”后，就会由测试人员进行功能测试。功能测试可以发现页面中的功能遗漏、功能错误及样式错误等问题，并有效降低将这些问题带到生产环境的概率。</p><p>相对单元测试，功能测试的测试粒度更粗。单元测试的对象一般是工具函数、组件等，功能测试的对象则是由单元测试的对象组装聚合，再添加部分代码逻辑得到的新对象。</p><p>开发人员在进行功能测试时通常不会有系统化的流程，基本上是完成一个模块测试一个模块，功能测试的覆盖场景往往不全面。在进行功能测试之前，测试人员会根据产品的需求文档和页面设计稿编写相关的测试用例，然后组织该功能模块涉及的产品经理和开发人员共同进行用例评审，确保测试用例能有效覆盖大部分场景。</p><h4 id="测试范围" tabindex="-1"><a class="header-anchor" href="#测试范围" aria-hidden="true">#</a> 测试范围</h4><p>除了与业务逻辑相关的测试，功能测试还包括浏览器兼容性、数据交互、页面展示等方面的测试。</p><ul><li><p>从浏览器兼容性来看，功能测试需要保证页面的功能可以在要求的浏览器版本下正常运行。作为页面的容器，页面的所有功能都由浏览器提供，因此务必保证开发的功能是浏览器可兼容的。</p></li><li><p>从数据交互来看，功能测试需要保证页面的数据交互逻辑正常。因为页面的核心功能就是展示和编辑数据，所以数据交互至关重要。</p></li><li><p>从页面展示来看，功能测试需要保证页面展示的内容是可阅读、可理解、可操作的。因为用户只有正常浏览页面内容，才能进行对应的操作。</p></li></ul><h4 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h4><p>功能测试是测试流程中耗时最多并且最重要的环节，它确保了功能的基本可用性。开发人员不能完全依赖测试人员，自己也应该做好功能测试。</p><h3 id="集成测试" tabindex="-1"><a class="header-anchor" href="#集成测试" aria-hidden="true">#</a> 集成测试</h3><p>集成测试是在功能测试的基础上，将所有功能子模块合并成一个模块，再进行一次整体的测试。从研发角度来看，集成测试就是将所有的功能分支合并成一个集成分支，然后将该集成分支部署到集成测试环境中。</p><p>在集成测试前必须完成功能测试，如果在功能测试没通过的情况下，直接将功能分支合并到集成分支，等到集成测试阶段再进行纠错，那么开发人员将付出更大的纠错成本。</p><p>实践表明，在功能测试期间，虽然单个模块能够正常运转，但是这并不代表该模块在集成后依然能正常运转。在功能测试期间没有暴露的问题，很可能在集成测试时暴露出来。</p><h4 id="测试范围-1" tabindex="-1"><a class="header-anchor" href="#测试范围-1" aria-hidden="true">#</a> 测试范围</h4><p>集成测试期间需要做的工作基本与功能测试一致，不同之处在于集成测试的对象是所有功能测试的对象的聚合体。</p><h4 id="小结-2" tabindex="-1"><a class="header-anchor" href="#小结-2" aria-hidden="true">#</a> 小结</h4><p>集成测试的工作依然主要由测试人员进行，在这个过程中，测试人员一般会把功能测试期间的测试用例再执行一遍，同时对涉及跨功能模块进行交互的地方重点进行回归测试。当集成测试完成后，基本能保证本次研发涉及的功能模块的主流程没有阻塞性问题。</p><h3 id="端到端测试" tabindex="-1"><a class="header-anchor" href="#端到端测试" aria-hidden="true">#</a> 端到端测试</h3><p>大多数应用程序架构都是采用面向服务的体系结构设计的，服务与服务之间的依赖关系转变成了应用与应用之间的关系，服务流程中的任何一个环节出现故障都可能导致整个应用程序陷入瘫痪。为了确保上线的功能不会产生这类问题，需要从头到尾地测试整个服务流程，该测试行为就叫端到端测试。</p><h4 id="测试范围-2" tabindex="-1"><a class="header-anchor" href="#测试范围-2" aria-hidden="true">#</a> 测试范围</h4><p>端到端测试不仅测试前端页面，还贯穿整个服务流程。例如web-接口服务-数据库。只要涉及类似的依赖关系，都需要进行测试，如果有问题就可以提前暴露出来。</p><h4 id="测试方式" tabindex="-1"><a class="header-anchor" href="#测试方式" aria-hidden="true">#</a> 测试方式</h4><p>按照测试的方向不同，端到端测试可以分为水平测试和垂直测试两种。</p><ul><li><p>水平端到端测试是最常见的测试方法，通常由测试人员进行。它要求参与测试的人员站在用户的角度，尽可能真实地模拟用户的操作流程，从而发现潜在的异常和隐患。为了消除测试环境中的干扰因素，一般会选择在生产环境下进行灰度发布，使用生产环境的测试账号进行测试，当所有测试都通过后再进行灰度放量和全量发布。</p></li><li><p>垂直端到端测试是实施成本比较高的方法，通常由开发人员进行。它会将整个服务进行分层，逐层设计测试方案。对于每个场景都应该创建一个或多个测试用例，并且每个单独的条件都应该作为一个单独的测试用例。</p></li></ul><h4 id="小结-3" tabindex="-1"><a class="header-anchor" href="#小结-3" aria-hidden="true">#</a> 小结</h4><p>端到端测试将系统作为一个整体来进行测试，因此可以排查出各个模块依赖间的隐患。它要求测试人员对系统有整体的认知，熟悉整个业务的操作流程，否则端到端测试将很难有效发现测试过程中的问题。</p><h2 id="测试方式-1" tabindex="-1"><a class="header-anchor" href="#测试方式-1" aria-hidden="true">#</a> 测试方式</h2><h3 id="白盒测试" tabindex="-1"><a class="header-anchor" href="#白盒测试" aria-hidden="true">#</a> 白盒测试</h3><p>白盒测试是一种基于代码的测试，它要求测试人员了解代码的逻辑，一般由开发人员进行。白盒测试主要通过检查代码内部的逻辑，对逻辑路径进行覆盖测试，以确定实际运行状态与预期状态是否一致。</p><h4 id="测试分类" tabindex="-1"><a class="header-anchor" href="#测试分类" aria-hidden="true">#</a> 测试分类</h4><p>白盒测试的方法包括静态分析法和动态分析法两大类。</p><ul><li><p>静态分析法指在不执行代码的情况下，通过编码规范、语法分析、静态错误分析等手段对代码进行审查。例如，使用lint工具检测代码是否符合规范，通过代码评审排查代码存在的问题，使用tsc扫描类型问题等。</p></li><li><p>动态分析法指通过编写测试用例执行需要测试的代码，判断结果是否符合预期。动态分析法主要包括6种测试方法，分别是语句覆盖、判定覆盖、条件覆盖、分支件覆盖、条件组合覆盖和路径覆盖。路径覆盖发现错误的概率最高，当路径覆盖率为100%时，证明当前代码的所有执行路径都经过了测试。</p></li></ul><h4 id="小结-4" tabindex="-1"><a class="header-anchor" href="#小结-4" aria-hidden="true">#</a> 小结</h4><p>白盒测试只能确保代码的语法和逻辑正常，对代码的分支路径进行覆盖测试并不能确保功能的正确性。</p><h3 id="黑河测试" tabindex="-1"><a class="header-anchor" href="#黑河测试" aria-hidden="true">#</a> 黑河测试</h3><p>黑盒测试是一种基于功能的测试，它只检查应用能否按照设计意图正常运行，因此不需要测试人员了解代码逻辑。黑盒测试主要发现功能错误、功能遗漏，以及是应用否能够正确接收输入数据并给出正确的输出结果。</p><h4 id="用例设计" tabindex="-1"><a class="header-anchor" href="#用例设计" aria-hidden="true">#</a> 用例设计</h4><p>黑盒测试行为需要能够被量化，才能真正保证软件质量，而测试用例就是将测试行为量化的方法之一。测试人员可以使用等价类划分法、边界值分析法、错误推测法三种常用的方法来设计测试用例，从而尽可能覆盖主要的测试情况。</p><ul><li><p>等价类划分法将输入条件划分为多个等价类，从每个等价类中选取一个作为输入，将输出结果作为这个等价类的输出结果。按照输入条件的合法性，等价类又可以细分为有效等价类和无效等价类。有效等价类指输入条件满足规定的输入等价类，而无效等价类指输入条件不满足规定的输入等价类。例如，当前有一个判断用户名称长度是否正常的功能，假设用户名称长度大于0并且小于或等于10为正常，此时，用户名称长度大于0并且小于或等于10的输入可以归为一个等价类，即有效等价类；用户名称长度大于10的输入可以归为一类，即无效等价类。</p></li><li><p>边界值分析法将等价类的边界情况作为测试用例。实践证明，大量的错误都是发生在输入或输出范围的边界上，而不是发生在输入或输出范围的内部的。因此针对各种边界情况设计测试用例，可以查出更多的错误。同样以判断用户名称长度为例，长度为0和10的情况就属于边界测试用例，可以通过边界值分析法找出边界。</p></li><li><p>错误推测法基于个人经验和直觉来推测程序中可能存在的错误，从而有针对性地设计测试用例。例如，在页面提交数据时多次单击确定按钮是否会导致接口请求重复提交；表格中的文本展示是否考虑了超长文本撑开单元格的情况。这些都是前端开发中经常遇到的异常情况，在进行黑盒测试时可以有目的地结合这些情况编写测试用例。</p></li></ul><h4 id="小结-5" tabindex="-1"><a class="header-anchor" href="#小结-5" aria-hidden="true">#</a> 小结</h4><p>黑盒测试不仅包括软件的正确性、可用性等功能测试，也包括非功能性测试，例如，兼容性测试、性能测试、压力测试及安全性测试等。</p><p>黑盒测试站在用户的角度，从输入数据与输出数据的对应关系出发进行测试，能更好、更真实地从用户角度考查被测系统的功能性需求实现情况。如果应用本身的设计存在问题，那么黑盒测试是没办法发现的，因为黑盒测试的测试用例都是根据设计文档编写的。</p><h2 id="测试手段" tabindex="-1"><a class="header-anchor" href="#测试手段" aria-hidden="true">#</a> 测试手段</h2><h3 id="手工测试" tabindex="-1"><a class="header-anchor" href="#手工测试" aria-hidden="true">#</a> 手工测试</h3><p>手工测试是最原始的测试手段，也是目前软件测试应用最多、发现问题最有效的手段，由测试人员编写测试用例。在测试用例经过评审后，测试人员会根据测试用例中描述的规则一步步进行测试，将得到实际结果与期望结果进行比较。</p><h4 id="用例设计-1" tabindex="-1"><a class="header-anchor" href="#用例设计-1" aria-hidden="true">#</a> 用例设计</h4><p>测试用例是手工测试中非常重要的部分，以文本搭配图片的形式引导测试人员进行测试。</p><ul><li><p>前置条件，包括测试的环境、功能模块、测试账号等，用于指导测试人员进行测试前的准备工作</p></li><li><p>测试步骤，包括需要执行哪些操作；</p></li><li><p>最后描述预期结果，用于判断本次测试结果是否符合预期，这是判断测试用例是否通过的关键。</p></li><li><p>当测试用例没有通过时，测试人员会在测试用例描述的基础上添加本次执行的结果并反馈给开发人员，帮助其排查和修复缺陷。</p></li></ul><h4 id="小结-6" tabindex="-1"><a class="header-anchor" href="#小结-6" aria-hidden="true">#</a> 小结</h4><p>手工测试的优点在于门槛较低，测试人员在熟悉产品设计文档以后，就可以快速进行测试。它的缺点在于测试过程中存在很多重复的回归测试工作，会浪费大量时间，并且测试的质量在很大程度上依赖测试人员的能力。手工测试虽然比较原始，也存在以上缺陷，但它目前依然是各种测试手段中发现缺陷最有效的方法。</p><h3 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试" aria-hidden="true">#</a> 自动化测试</h3><p>自动化测试的目的是节省人力、时间或硬件资源，从而提高测试效率。</p><h4 id="适合场景" tabindex="-1"><a class="header-anchor" href="#适合场景" aria-hidden="true">#</a> 适合场景</h4><p>自动化测试和手工测试的不同之处在于，在实施自动化测试前需要对测试对象进行分析，判断其是否适合进行自动化测试。判断依据主要有以下三点。</p><ul><li><p>需求变更不能太频繁。需求的稳定性直接决定了自动化测试的维护成本。如果需求变动过于频繁，测试人员就需要频繁更新测试用例以及相关的测试脚本。脚本的维护本身就是一个代码开发的过程，需要修改、调试。如果脚本开发和维护所花费的成本高于节省下来的测试成本，自动化测试就是失败的。如果项目中的某些模块相对稳定，而某些模块的需求变动性很大，那么开发人员可以选择相对稳定的模块进行自动化测试，对于变动较大的部分继续采用手工测试。</p></li><li><p>测试对象生存周期长。自动化测试的用例编写和开发一般需要较长的时间来完成，如果测试对象的生存周期比较短，就没必要浪费时间做自动化测试。例如，各种营销活动页面，基本只会在活动期间使用，活动期结束就会被废弃。这种功能模块就没必要进行自动化测试。</p></li><li><p>自动化测试的脚本可重复利用率高。编写的自动化测试脚本应该具有比较高的重复利用率和比较强的泛用性，这样可以有效避免自动化测试的投入成本大于实际收益。</p></li></ul><h4 id="测试分类-1" tabindex="-1"><a class="header-anchor" href="#测试分类-1" aria-hidden="true">#</a> 测试分类</h4><p>前端的自动化测试手段主要包括工具函数单元自动化测试和UI自动化测试两类。</p><ul><li><p>工具函数单元自动化测试主要编写各种单元测试用例，以代码覆盖率来判断测试的质量情况。</p></li><li><p>UI自动化测试主要通过对功能变更前后的页面进行对比测试来判断变化情况，常用的手段有像素对比、DOM diff等。</p></li></ul><h4 id="小结-7" tabindex="-1"><a class="header-anchor" href="#小结-7" aria-hidden="true">#</a> 小结</h4><p>自动化测试虽然有很多优点，但并不能完全取代手工测试。手工测试往往能够发现一些自动化测试发现不了的问题，同时，完全使用自动化测试替代手工测试也存在成本问题。</p><p>例如，如果需要测试的某个页面处于快速迭代的阶段，那么基本每次迭代都会有变化，这种情况在前端非常常见。对这个页面使用手工测试也许只需要花费10s的时间，使用自动化测试却需要花费几个小时甚至几天的时间用于编写测试用例，并且还要维护测试用例。在这种情况下，显然应该选择使用手工测试来解决问题</p><p>编写测试脚本的过程也是人力投入的过程，这个过程也属于手工测试的范畴。因此，自动化测试更像是机器和人力进行协作的一种测试手段。</p><h2 id="常用测试工具" tabindex="-1"><a class="header-anchor" href="#常用测试工具" aria-hidden="true">#</a> 常用测试工具</h2><h3 id="jest" tabindex="-1"><a class="header-anchor" href="#jest" aria-hidden="true">#</a> jest</h3><p>Jest是一款由Facebook开发的JavaScript测试框架，它借鉴并吸收了诸多JavaScript测试框架的优点。Jest直接内置了常用的测试工具，如断言、测试覆盖率等，真正做到了开箱即用。在执行用例时采取并行模式，大大提高了执行速度。Jest支持快照测试的功能，可以通过对比每次渲染组件生成的快照文件，快速实现React、Vue等前端框架的自动测试。开发人员在使用Jest进行测试时只需要按照Jest的约定创建测试文件，直接执行Jest脚本命令就能使用默认配置快速进行自动化测试。综合以上原因，Jest在GitHub开源社区大受欢迎，很多开发人员将它作为测试工具的首选。</p><h3 id="cypress" tabindex="-1"><a class="header-anchor" href="#cypress" aria-hidden="true">#</a> Cypress</h3><p>ypress是一款使用JavaScript编写的前端自动化测试工具，它可以在浏览器中运行自定义的脚本，对浏览器中运行的内容进行快速、简单、可靠的测试。它集成了常用的测试工具库，开发人员不用额外安装和配置其他模块。</p>',84),p=[d];function n(t,l){return e(),h("div",null,p)}const c=a(r,[["render",n],["__file","index.html.vue"]]);export{c as default};
