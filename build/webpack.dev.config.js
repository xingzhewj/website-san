/**
 * @file 开发环境webpack配置
 * @Author wangjie19
 * @Date 2018-01-25 18:14:12
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 14:29:35
 */

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.config';
import entries from './entries';
import hwplugins from './hwplugins';

entries.reload = 'webpack-hot-middleware/client?reload=true';

export default webpackMerge(
    baseConfig,
    {
        entry: entries,
        devtool: "cheap-module-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ].concat(hwplugins)
    }
);
