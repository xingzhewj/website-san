/*
 * @file 多页面入口配置
 * @Author: walker
 * @Date: 2018-01-29 22:30:33 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-01-30 17:56:31
 */

import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dirs = fs.readdirSync(path.resolve(__dirname, '../client/pages'));

const config = {
    entries: {},
    plugins: []
};

dirs.forEach((dir, index) => {
    const dirPath = path.resolve(__dirname, '../client/pages', dir);
    const statInfo = fs.statSync(dirPath);
    if (statInfo.isDirectory()) {
        config.entries[dir] = dirPath + '/index.js';
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(dirPath, './index.html'),
                filename: path.resolve(__dirname, '../dist'),
                inject: true,
                favicon: path.resolve(__dirname, '../favicon.ico')
            })
        );
    }
});

export default config;
