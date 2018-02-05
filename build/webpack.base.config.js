/**
 * @file webpack编译配置基础脚本
 * @Author wangjie19
 * @Date 2018-01-24 14:38:44
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-05 18:36:35
 */

import webpack from 'webpack';
import path from 'path';
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolvePath(file) {
    return path.resolve(__dirname, file);
}

export default {
    entry: {
        reload: 'webpack-hot-middleware/client?reload=true',
        util: resolvePath('../client/common/util.js')
    },
    output: {
        path: resolvePath('../dist/js'),
        filename: '[name]-[hash:4].js',
        chunkFilename: '[chunkhash:8].[name].chunk.js',
        publicPath: '/js'
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
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                  'less-loader'
                ]
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
        new CleanWebpackPlugin(['dist'], {
            root: resolvePath('../')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vector',
            filename: 'vector-[hash:4].js'
        }),
        
    ]
};
