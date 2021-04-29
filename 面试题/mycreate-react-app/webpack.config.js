const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
// 只能处理js文件 webpack5自己使用loader可以处理less,scss文件类型

module.exports={
    entry:{
        app:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'), // 当前目录下的绝对路径
        filename:'[name].bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'我要去长沙',
            template:path.resolve(__dirname,'./public/index.html'),
            filename:'index.html'
        })
    ]
}