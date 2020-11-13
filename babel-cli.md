@babel/cli // 译为babel脚手架;

@babel/core // 译为babel核心;

如果使用babel以上两个是必须要安装使用的;

@babel/cli是babel提供的内建的命令行工具，主要是提供babel这个命令来对js文件进行编译的，

@babel/core包括了整个babel的工作流，是babel的核心包。

在当前目录下创建一个.babelrc文件 or babelrl.json文件 or babel.config.json文件即可。

因为.babelrc文件默认的就是json数据类型。如果全局没有安装@babel/cli & @babel/core,

要么在package.json中配置如下命令：
  "scripts": {
    "build": "babel index.js -o index1.js -w"
  },
要么使用npx babel index.js -o index1.js -w

如果全局安装了@babel/cli & @babel/core,

可以直接在控制台输入babel index.js -o xxx.js 或者 npx babel index.js -o index1.js -w

那么为什么npm run babel index.js -o index1.js -w却不报npm ERR! missing script: script缺省babel呢？

因为npx运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。

如果仅是在终端输出转换结果，直接在控制台输入babel index.js回车执行即可。

如果是输出到文件，直接在控制台输入babel index.js -o xxx.js

或者babel index.js --watch --out-file index1.js即可;

--out-file 简写为 -o

如果相对某个文件夹下所有的js文件进行babel转换，babel 目标文件夹 -d 指定的文件夹，

如果指定的文件夹不存在，那么-d 后面可以新建一个，

待执行完该命令会生成一个新的文件夹，转换后的js会在该新文件夹中

babel src -d dest