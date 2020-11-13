const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const babelConfig = require('./babel.config')
const config = {
  entry: {
    bundle: path.resolve(__dirname, './compiled.js')
  },
  output: { // 文件打包出口
    path: path.resolve(__dirname),
    filename: 'bundle.js', // 打包输出文件的文件名
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/, // 排除转码node_modules|packages文件中的模块
        test: /\.js$/, // 配置要处理的文件格式，一般使用正则表达式匹配
        use: {
          loader: 'babel-loader', // 使用的加载器名称
          options: babelConfig
        },
      },
    ]
  },
  plugins: [],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ie8: true,
        }
      })
    ]
  }
}
module.exports = config;