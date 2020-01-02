const WebpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports=WebpackMerge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'),
            template: 'index.html',
            inject: true
        })
    ], 
    devServer: {
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true, //
        contentBase: false , // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, //一切服务都启用gzip压缩
        port: 8081,
        open: true,
        publicPath: "/", // 访问资源加前缀
        proxy: {
            //接口请求代理 跨域
        }
    }
})