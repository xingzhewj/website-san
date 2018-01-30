/**
 * @file 生产环境webpack编译配置
 * @Author wangjie19
 * @Date 2018-01-30 17:09:36
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-30 23:12:36
 */

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.config';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import entries from './entries';
import hwplugins from './hwplugins';

export default webpackMerge(
    baseConfig,
    {
        entry: entries,
        plugins: [
            new UglifyJsPlugin()
        ].concat(hwplugins)
    }
);