/*
 * @file 多页面入口配置
 * @Author: walker
 * @Date: 2018-01-29 22:30:33 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-29 23:21:07
 */

import path from 'path';
import fs from 'fs';
import htmlWeabpckPlugin from 'html-webpack-plugin';

const dirs = fs.readdirSync(path.resolve(__dirname, '../client/pages'));

dirs.forEach((dir, index) => {
    const dirPath = path.resolve(__dirname, '../client/pages', dir);
    const statInfo = fs.statSync(dirPath);
    const entries = [];
    const plugins = [];
    if (statInfo.isDirectory()) {
        entries.push(
            {
                [dir]: dirPath
            }
        );
        plugins.push(
            new HtmlWebpackPlugin({
                title: '首页',
                template: path.resolve(dirPath, './index/html')
            })
        );
    }
});

export default {};
