/**
 * @file 开发环境webpack配置
 * @Author wangjie19
 * @Date 2018-01-25 18:14:12
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-08 16:42:46
 */

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import entries from './entries';
import hwplugins from './hwplugins';

function resolvePath(ph) {
    return path.resolve(__dirname, ph);
}

const extractLess = new ExtractTextPlugin({
    filename: '../css/[name]-[contenthash:4].css'
});
const extractCss = new ExtractTextPlugin({
    filename: '../css/[name]-[contenthash:4].css'
});

module.exports = {
    devtool: "cheap-module-source-map",
    entry: Object.assign(
        entries,
        {
            util: resolvePath('../client/common/util.js')
        }
    ),
    output: {
        filename: '[name]-[hash:4].js',
        path: resolvePath('../dist/js'),
        publicPath: '/js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.san$/,
                use: ['san-loader']
            },
            {
                test: /\.html?$/,
                exclude: /node_modules/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: extractCss.extract([
                    {
                        loader: 'css-loader'
                    }
                ])
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: resolvePath('../postcss.config.js')
                                }
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
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
        extractCss,
        extractLess,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vector',
            filename: 'vector.js'
        })
    ].concat(hwplugins)
};