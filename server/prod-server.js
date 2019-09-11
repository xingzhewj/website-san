/**
 * @file 生产环境服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-30 17:10:41
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-08 16:18:37
 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.prod.config';

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