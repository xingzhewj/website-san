/*
 * @Author:walker
 * @Date: 2018-01-30 22:04:05 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 17:58:55
 */

import express from 'express';
const router = express.Router();
import request from '../common/request';

router.get('/', (req, res, next) => {
    request.get(
        'http://api.douban.com/v2/movie/top250',
        {
            start: 25,
            count: 25
        }
    )
    res.render('home', {});
});

export default router;
