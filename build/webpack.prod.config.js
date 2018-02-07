/**
 * @file 生产环境webpack编译配置
 * @Author wangjie19
 * @Date 2018-01-30 17:09:36
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-07 15:09:13
 */

import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import entries from './entries';
import hwplugins from './hwplugins';

function resolvePath(file) {
    return path.resolve(__dirname, file);
}

const extractCss = new ExtractTextPlugin({
    filename: '../css/[name]-[contenthash:4].css'
});
const extractLess = new ExtractTextPlugin({
    filename: '../css/[name]-[contenthash:4].css'
});

export default {
    entry: Object.assign(
        entries,
        {
            util: resolvePath('../client/common/util.js')
        }
    ),
    output: {
        path: resolvePath('../dist/js'),
        filename: '[name].js',
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
                test: /\.css$/,
                use: extractCss.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ])
            },
            {
                test: /\.less$/,
                use: extractLess.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ])
            },
            {
                test:/\.(png|jpg|gif|eot|svg|ttf|woff)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            // 8M
                            limit: 1024 * 8
                        }
                    }
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
        extractCss,
        extractLess,
        new webpack.LoaderOptionsPlugin({  
            options: {  
                postcss: function(){  
                    return [  
                        require("autoprefixer")({  
                            browsers: ['ie>=8','>1% in CN']  
                        })  
                    ]  
                }  
            }  
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vector',
            filename: 'vector.js'
        }),
        new UglifyJsPlugin()
    ].concat(hwplugins)
};