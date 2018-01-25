/**
 * @file 服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-24 15:22:58
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-25 18:41:00
 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../build/webpack.dev.config';

const compiler = webpack(webpackConfig, () => {});
const app = express();

// devMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     quiet: true
// });
// hotMiddleware(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
// });

// app.use(devMiddleware);
// app.use(hotMiddleware);

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(8080, () => {
    console.log('server success:http://localhost:8080/');
});
