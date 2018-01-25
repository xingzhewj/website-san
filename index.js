/**
 * @file 项目主入口
 * @Author wangjie19
 * @Date 2018-01-24 14:46:14
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-24 14:58:16
 */

require('babel-polyfill');
const babelRegister = require('babel-register');
const fs = require('fs');
const babelConfig = fs.readFileSync('./.babelrc');
babelRegister(JSON.parse(babelConfig));
require('./build/build');
