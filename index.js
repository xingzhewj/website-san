/**
 * @file 项目主入口
 * @Author wangjie19
 * @Date 2018-01-24 14:46:14
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-30 17:14:45
 */

require('babel-polyfill');
const babelRegister = require('babel-register');
const fs = require('fs');
const babelConfig = fs.readFileSync('./.babelrc');
babelRegister(JSON.parse(babelConfig));
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
    require('./server/dev-server');
}
else if (NODE_ENV === 'production') {
    require('./server/prod-server');
}
