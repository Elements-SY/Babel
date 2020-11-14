

我们知道Babel预设并不能解决JS新增的API，只能够做语法转换。

如果我们想要兼容各大浏览器或者版本，那么我们就需要使用

@babel/plugin-transform-runtime和@babel/runtime-corejs3插件，

它能根据不同浏览器或者版本引入所需要兼容的解决方案或者说方法，

除此之外还可以使用@babel/polyfill插件，但是它并不能根据不同浏览器或者版本引入所需要兼容的解决方案或者说方法，而是把所有的解决方案或者说方法通通纳入进来，这样的问题是会造成打包资源过大。
当babel配置文件中"useBuiltIns": "entry"时，那么就不再需要@babel/plugin-transform-runtime和@babel/runtime-corejs3插件，而是直接在主文件引入@babel/polyfill插件

手动引入@babel/polyfill在babel编译index.js文件中注释部分