/**
 * @file webpack编译配置基础脚本
 * @Author wangjie19
 * @Date 2018-01-24 14:38:44
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-29 22:51:58
 */

import webpack from 'webpack';
import path from 'path';
import entries from './getEntries';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function resolvePath(file) {
    return path.resolve(__dirname, file);
}

export default {
    entry: {
        main: resolvePath('../client/main.js')
    },
    output: {
        path: resolvePath('../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.san$/,
                loader: 'san-loader'
            }
        ]
    },
    resolve: {
        alias: {
            san: process.env.NODE_ENV === 'production'
                ? 'san/dist/san.js'
                : 'san/dist/san.dev.js'
        },
        extensions: ['.js', '.json', '.san', '.less', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'vector.js'
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            template: resolvePath('../client/pages/home.html')
        })
    ]
};
