import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dirs = fs.readdirSync(path.resolve(__dirname, '../server/pages'));

let hwpPlugins = []

dirs.forEach((file, index) => {
    const filename = file.split('.')[0];
    let hwpConf = {
        template: path.resolve(__dirname, '../server/pages', file),
        filename: path.resolve(__dirname, `../server/templates/${filename}.html`),
        minify: {
            removeComments: true,
            collapseWhitespace: false
        },
        inject: true,
        favicon: path.resolve(__dirname, '../favicon.ico'),
        chunks:['vector', filename]
    };
    if (process.env.NODE_ENV === 'development') {
        hwpConf.chunks = hwpConf.chunks.concat('reload');
    }
    hwpPlugins.push(
        new HtmlWebpackPlugin(hwpConf)
    );
});

export default hwpPlugins;
