/**
 * @file 请求脚本
 * @Author wangjie19
 * @Date 2018-02-01 17:46:38
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 18:08:23
 */

import axios from 'axios';

function get(url, options) {
    return axios.get(url, options);
}

export default {
    get
};
