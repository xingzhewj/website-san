/**
 * @file webpack编译配置基础脚本
 * @Author wangjie19
 * @Date 2018-01-24 14:38:44
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-30 17:57:04
 */

import webpack from 'webpack';
import path from 'path';
import entries from './getEntries';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function resolvePath(file) {
    return path.resolve(__dirname, file);
}

console.log('xxxxx:', [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'vector.js'
    })
].join(entries.plugins))

export default {
    entry: entries.entries,
    output: {
        path: resolvePath('../dist/js'),
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
        })
    ].join(entries.plugins)
};
