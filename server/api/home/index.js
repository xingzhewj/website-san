/**
 * @file 主页api接口
 * @Author wangjie19
 * @Date 2018-02-02 15:36:13
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-06 12:22:59
 */

import express from 'express';
import request from '../../common/request';

const router = express.Router();

router.all('/weatherApi', (req, res) => {
    request.apiHttp(req).then(data => {
        res.send(data);
    }, err => {
        res.send({
            statusInfo: 'fakkil'
        });
    });
});

export default router;
