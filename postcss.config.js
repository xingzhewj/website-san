module.exports = {
    // 自定义样式文件才使用sugarss；我们用的是.css文件所以不用这个配置
    // parser: 'sugarss',
    plugins: {
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        }
    }
}