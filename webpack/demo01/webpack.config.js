// 与 parcel 的不同，配置繁琐
// npm run build "build":"webpack --mode=development"
// 一定会去根目录下找到 webpack.config.js 配置文件
// module node 模块化 common.js  module.exports
// es6中 import export 模块化   export default
module.exports = {
    entry: './main.js', //入口
    output: { //出口
      filename: 'bundle.js'
    }
  }