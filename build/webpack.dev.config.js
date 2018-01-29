/**
 * @file 开发环境webpack配置
 * @Author wangjie19
 * @Date 2018-01-25 18:14:12
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-29 21:44:22
 */

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.config';

export default webpackMerge(
    baseConfig,
    {
        entry: {
            reload: 'webpack-hot-middleware/client?reload=true'
        },
        devtool: "cheap-module-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }
);
