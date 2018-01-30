/**
 * @file 开发环境服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-24 15:22:58
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-30 18:00:50
 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../build/webpack.dev.config';
import log4js from 'log4js';
import opn from 'opn';

const compiler = webpack(webpackConfig);
const app = express();
// 对更改的文件进行监控，编译
app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
}));
// 页面的热重载
app.use(hotMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(8080, () => {
    console.log('server success:http://localhost:8080/');
    opn('http://localhost:8080/');
});
