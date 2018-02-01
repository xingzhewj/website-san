/**
 * @file 开发环境服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-24 15:22:58
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 17:44:00
 */

import path from 'path';
import express from 'express';
import ejs from 'ejs';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.dev.config';
import log4js from 'log4js';
import opn from 'opn';
// 中间件
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import router from './router';

const compiler = webpack(webpackConfig);
const app = express();

// 设置ejs模版
app.set('views', path.resolve(__dirname, './templates/'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
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
// 设置静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));
// 设置页面路由
app.use(router);
// 设置cookie中间件
app.use(cookieParser());
// 设置session
app.use(session());

app.listen(8080, () => {
    console.log('server success:http://localhost:8080/');
    opn('http://localhost:8080/', {
        app: 'google chrome'
    });
});
