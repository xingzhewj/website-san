/**
 * @file 服务器启动脚本
 * @Author wangjie19
 * @Date 2018-01-24 15:22:58
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-25 16:54:30
 */

import express from 'express';


const app = express();

app.get('/', (req, res, next) => {});

app.listen(8080);
