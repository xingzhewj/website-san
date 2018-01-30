/**
 * @file 生产环境webpack编译配置
 * @Author wangjie19
 * @Date 2018-01-30 17:09:36
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-30 17:55:45
 */

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.config';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

console.log('baseConfig', baseConfig);

export default webpackMerge(
    baseConfig,
    {
        entry: {},
        plugins: [
            new UglifyJsPlugin()
        ]
    }
);