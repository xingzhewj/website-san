/**
 * @file webpack编译配置基础脚本
 * @Author wangjie19
 * @Date 2018-01-24 14:38:44
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-06 17:54:53
 */
import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

function resolvePath(file) {
    return path.resolve(__dirname, file);
}

const extractCss = new ExtractTextPlugin({
    filename: '../css/[name].css'
});
const extractLess = new ExtractTextPlugin({
    filename: '../css/[name].css'
});

export default {
    entry: {
        util: resolvePath('../client/common/util.js')
    },
    output: {
        path: resolvePath('../dist/js'),
        filename: '[name].js',
        publicPath: '/js/'
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
                    'css-loader',
                    'postcss-loader'
                ])
            },
            {
                test: /\.less$/,
                use: extractLess.extract([
                    'css-loader',
                    'less-loader'
                ])
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
    ]
};
