/**
 * @file 生产环境服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-30 17:10:41
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-30 17:53:45
 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.prod.config';

console.log(JSON.stringify(webpackConfig));

webpack(webpackConfig, () => {});

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(8080, () => {
    console.log('server success:http://localhost:8080/');
});
