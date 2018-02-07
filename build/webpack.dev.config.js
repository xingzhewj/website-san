/**
 * @file 开发环境webpack配置
 * @Author wangjie19
 * @Date 2018-01-25 18:14:12
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-07 15:08:52
 */

import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
    devtool: "cheap-module-source-map",
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
                    'css-loader'
                ])
            },
            {
                test: /\.less$/,
                use: extractLess.extract([
                    'css-loader',
                    'less-loader'
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
        })
    ].concat(hwplugins)
};
