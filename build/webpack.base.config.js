const path = require('path');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development', // 指定构建环境
    entry: {
        app: './src/app'
    },
    output: {
        path: utils.resolve('../dist'),
        filename: 'js/[name].[hash:7].js',
        publicPath: '/' // 打包后的资源访问前缀
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 解析扩展，当找不到文件时会去尝试加载这些后缀继续寻找
        alias: {
            '@': path.join(__dirname, '..', 'src') // 可为路径配置多个别名儿
        }
    },
    module: { // 配置模块
        rules: [
            {
                test: /\.(js|jsx)$/, // 匹配loaders所处理的文件的拓展名的正则表达式
                exclude: /node_modules/, // 屏蔽不需要处理的文件|文件夹
                loader: 'babel-loader', // loader名
                options: {
                    "plugins": [
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": "css" // `style: true` 会加载 less 文件
                        }],
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [ // 配置插件
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), // html模版生成路径
            template: 'index.html', // html模版
            inject: true, //script标签位于html文件的body底部
            hash: true, // 在打包的资源插入html会加上hash
            minify: {
                removeComments: true, // 去注释
                collapseWhitespace: true, //去空格
                removeAttributeQuotes: true //去属性中的引号
            }
        })
    ],
    devServer: { // 开发环境本地启动的服务配置

    }
}