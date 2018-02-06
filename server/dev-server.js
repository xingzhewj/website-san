/**
 * @file 开发环境服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-24 15:22:58
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-06 15:51:20
 */

import path from 'path';
import http from 'http';
import express from 'express';
import ejs from 'ejs';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.dev.config';
import log4js from 'log4js';
import reload from 'reload';
// 中间件
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

import router from './router';
import apis from './api';

const app = express();

webpack(webpackConfig, (err, stats) => {
    if (err) {
        throw new Error(err);
    }
    reload(app);
    console.log('completed');
});

import logConfig from './config/log';
log4js.configure(logConfig);
const logger = log4js.getLogger('http');
app.use(log4js.connectLogger(logger));
const errLogger = log4js.getLogger('error');
app.use(log4js.connectLogger(errLogger));
// 设置ejs模版
app.set('views', path.resolve(__dirname, './templates'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// 设置静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));

// 设置cookie中间件
app.use(cookieParser());
// 解析post参数(这个需要写在路由配置之前，因为是中间件嘛顺序执行的嘛；嘿嘿！！！)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 设置页面路由
app.use(router);
// 设置接口路由
app.use('/api', apis);

// 启动服务器
const httpServer = http.createServer(app);
httpServer.listen(8080, '0.0.0.0', () => {
    console.log('server success:http://127.0.0.1:8080/');
});
app.use((req, res, next) => {
    if(req.path !== '/reload/reload.js'){
        res.status(404);
        res.render('404');
    } else {
        next();
    }
});
// 错误捕获
// 同步错误
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.redirect('/500');
    // errLogger.error(err);
});
// 异步错误
process.on('unhandledRejection', err => {
    // errLogger.error(err);
});