@babel/cli

@babel/core

在使用babel之前babel脚手架和babel核心插件必须要进行安装，

待安装完毕，创建一个.babelrc文件或者babel.config.json配置文件。

因为babel脚手架默认会找到babel标识的json文件，如果使用打包工具，

例如webpack手动引入babel配置文件，那么babel配置文件名可任意写。

在该文件中创建预设

在7.0之前每次babel退出一个新的提案我们就需要多添加一个插件，

添加的插件越来越多，编译速度会越来越慢；

babel7.0之后不仅提供了添加插件(plugins)配置还提供了babel环境预设，

随着babel环境预设的出现，我们只需要指定哪些浏览器及其版本需要进行做转换兼容即可；

以及使用哪种置入方式（useBuiltIns）和模块(modules)是否需要进行转码。





