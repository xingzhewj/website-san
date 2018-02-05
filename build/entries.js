/*
 * @file 多页面入口配置
 * @Author: walker
 * @Date: 2018-01-29 22:30:33 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-05 17:04:03
 */

import path from 'path';
import fs from 'fs';

const pages = fs.readdirSync(path.resolve(__dirname, '../server/pages'));

let entries = {};
pages.forEach((page, index) => {
    const pageName = page.split('.')[0];
    const dirPath = path.resolve(__dirname, '../client/pages', pageName);
    if (fs.existsSync(dirPath + '/index.js')) {
        entries[pageName] = dirPath + '/index.js';
    }
});
export default entries;
