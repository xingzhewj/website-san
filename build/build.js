/**
 * @file 编译脚本
 * @Author wangjie19
 * @Date 2018-01-24 14:49:26
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-25 18:09:03
 */

import webpackConfig from './webpack.base.config';
import webpack from 'webpack';

webpack(webpackConfig, (err, stats) => {
    if (err) {
        throw new Error(err);
    }
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }));
});
