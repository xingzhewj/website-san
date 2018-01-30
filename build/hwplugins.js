import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dirs = fs.readdirSync(path.resolve(__dirname, '../client/pages'));

let hwpPlugins = []

dirs.forEach((dir, index) => {
    const dirPath = path.resolve(__dirname, '../client/pages', dir);
    const statInfo = fs.statSync(dirPath);
    if (statInfo.isDirectory()) {
        hwpPlugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(dirPath, './index.html'),
                filename: path.resolve(__dirname, `../dist/pages/${dir}.html`),
                inject: true,
                favicon: path.resolve(__dirname, '../favicon.ico')
            })
        );
    }
});

export default hwpPlugins;
