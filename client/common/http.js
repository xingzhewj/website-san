/**
 * @file 请求脚本
 * @Author wangjie19
 * @Date 2018-02-02 14:45:59
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-02 17:39:08
 */

import axios from 'axios';

// axios默认配置
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';
// 设置超时
axios.defaults.timeout = 3000;

/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} options 参数 
 */
function getHttp(url, options = {}) {
    return axios({
        method: 'get',
        url,
        params: options
    });
}

function postHttp(url, optinos = {}) {
    return axios({
        method: 'post',
        url,
        data: optinos
    });
}

export default {
    get: getHttp,
    post: postHttp
}
