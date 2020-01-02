const WebpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports=WebpackMerge(baseWebpackConfig, {
    mode: 'production', 
    plugins: [
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'),
            template: 'index.html',
            inject: true, 
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ], 
    devServer: {
        
    }
})