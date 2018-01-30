/*
 * @file 多页面入口配置
 * @Author: walker
 * @Date: 2018-01-29 22:30:33 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-30 23:01:04
 */

import path from 'path';
import fs from 'fs';

const dirs = fs.readdirSync(path.resolve(__dirname, '../client/pages'));

let entries = {};
dirs.forEach((dir, index) => {
    const dirPath = path.resolve(__dirname, '../client/pages', dir);
    const statInfo = fs.statSync(dirPath);
    if (statInfo.isDirectory()) {
        entries[dir] = dirPath + '/index.js';
    }
});

export default entries;
