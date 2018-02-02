/**
 * @file 请求脚本
 * @Author wangjie19
 * @Date 2018-02-01 17:46:38
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-02 17:41:45
 */

import axios from 'axios';

// axios默认配置
axios.defaults.baseURL = 'http://www.apiopen.top:88/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 设置超时
axios.defaults.timeout = 3000;
axios.interceptors.request.use(config => {
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(res => {
    return Promise.resolve({
        data: res.data,
        status: 0,
        statusInfo: 'success'
    });
}, err => {
    return Promise.reject({
        data: {},
        status: 1,
        statusInfo: 'fail'
    });
});

/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} options 参数 
 */
function getHttp(url, options = {}) {
    return axios.get(url, {
        params: options
    });
}
/**
 * post请求
 * @param {String} url 请求地址
 * @param {Object} options 参数
 */
function postHttp(url, options = {}) {
    return axios.post(url, options);
}

function apiHttp(req) {
    return axios({
        url: req.url,
        method: req.method,
        data: req.body
    });
}

export default {
    get: getHttp,
    post: postHttp,
    apiHttp
}
