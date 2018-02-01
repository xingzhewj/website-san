/**
 * @file webpack编译配置基础脚本
 * @Author wangjie19
 * @Date 2018-01-24 14:38:44
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 11:12:50
 */

import webpack from 'webpack';
import path from 'path';

function resolvePath(file) {
    return path.resolve(__dirname, file);
}

export default {
    entry: {
        util: resolvePath('../client/common/util.js')
    },
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
            },
            {
                test: /\.html?$/,
                exclude: /node_modules/,
                use: ['html-loader']
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
            name: 'vector',
            filename: 'vector.js'
        })
    ]
};
