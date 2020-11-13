Babel 7x教程
提示：建议使用前阅读documnet文件夹下的内容。
什么是Babel？

Babel 是一个 JavaScript 编译器。其目的就是在开发的时候能够使用Javascript新特性，
通过该(Bable) 编译器转换成想要指定的JavaScript历史版本，默认转换成ES5。

什么是@babel/cli(babel脚手架)？
官方链接: https://www.babeljs.cn/docs/babel-cli
介绍：该插件提供了babel脚手架和内置命令，通过内置命令执行脚手架进行编译文件。
babel脚手架内置命令的使用：请阅读babel-cli.md

那么什么是脚手架呢？
本人理解脚手架就是实现一个产品的自动化工具，通过搭建实现一个产品的工具，以及对该工具做如何实现产品的命令配置，用户不必关注产品的“实现过程”，只需要关注如何通过命令来“获取该产品”即可。
(面向对象=>面向“获取产品”而不是面向产品的“生产过程”)

什么是@babel/core(babel核心插件)？
官方链接: https://www.babeljs.cn/docs/babel-core
介绍：该插件提供了babel的核心API

什么是babel环境预设？
官方链接：https://babeljs.io/docs/en/babel-preset-env
官方介绍：@babel/preset-env是一个智能预设，可让您使用最新的JavaScript，
而无需微观管理目标环境所需的语法转换（以及可选的浏览器polyfill）。
这都使您的生活更轻松，JavaScript包更小！
认识Babel环境预设之前，我们不加入babel环境预设需要下载各种babel插件来把JS语法新特性转换成ES3，比如像是箭头函数呀字符串模板语法呀对象赋值结构let、const等等。如果使用babel环境预设那么对于JS语法新特性就迎刃而解，但是对于新增的API仅通过Babel环境预设则不能，这时我们就需要额外插件来解决。
Babel插件链接：https://www.babeljs.cn/docs/plugins
正如官方所述“除了一个一个的添加插件，你还可以以 preset 的形式启用一组插件”。

我们首先在babel-01中不使用Babel环境预设来转换一个箭头函数试试，
到Babel官方插件链接中我们使用一个@babel/plugin-transform-arrow-functions(译为：Babel插件转换箭头函数);
不难发现我们已经成功把箭头函数转换成标准的ES3函数了，接下来我们在babel-02中使用Babel环境预设不使用箭头函数插件试试。我们发现同样把箭头函数等JavaScript新特性转换成ES3语法了。

OK，如前所述Babel环境预设仅能解决JavaScript新特性的语法，但是对于新增的API仅通过Babel环境预设则不能。
那么如果不能，浏览器就无法支持JS新增的API。这时我们就需要额外插件@babel/plugin-transform-runtime来解决。

OK,我们先不使用@babel/plugin-transform-runtime插件转换，仅使用Babel环境预设来打包试试，看看浏览器报什么错。

什么是@babel/plugin-transform-runtime(babel插件转换运行时)？

什么是@babel/polyfill(babel polyfill)？
官方链接: https://www.babeljs.cn/docs/babel-polyfill
介绍：@babel/polyfill本质是由两个npm包core-js与regenerator-runtime组合而成的,
广义上讲是为环境提供不支持的特性的一类文件或库,进一步说@babel/polyfill是为了解决
JavaScript新特性的API能够让浏览器支持，因为babel环境预设只能够转换语法，
但是并不能够解决JavaScript新特性的API能够让浏览器支持，为了能够让浏览器支持JavaScript新的API，
就必须使用@babel/polyfill插件，如前所述@babel/polyfill是由两个npm包core-js与regenerator-runtime组合而成的，
那么它们分别起到的作用是什么？

core-js是babel-polyfill 的底层依赖,它的作用是通过ES3实现了大部分的ES2017原生标准库，同时还要严格遵循规范。




