/*
 * @Author:walker
 * @Date: 2018-01-30 22:04:05 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-02 16:40:14
 */

import express from 'express';
const router = express.Router();
import request from '../common/request';

router.get('/', async (req, res, next) => {
    const data = await request.get(
        '/satinApi',
        {
            type: 10,
            page: 25
        }
    );
    res.render('home', {
        list: data.data.data
    });
});

export default router;
