import json from 'rollup-plugin-json';
import commonjsP from 'rollup-plugin-commonjs'
import nodeRe from 'rollup-plugin-node-resolve'
export default {
  input: 'compiled.js', // 输入文件
  output: {
    file: 'bundle.js',
    format: 'iife', //iife
  },
  plugins: [
    json(),
    commonjsP(),
    nodeRe(),
  ]
}
