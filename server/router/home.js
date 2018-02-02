/*
 * @Author:walker
 * @Date: 2018-01-30 22:04:05 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-02 12:13:53
 */

import express from 'express';
const router = express.Router();
import request from '../common/request';

router.get('/', async (req, res, next) => {
    const data = await request.get(
        'http://api.douban.com/v2/movie/top250',
        {
            start: 0,
            count: 25
        }
    );
    res.render('home', {
        casts: data.data.subjects[0].casts
    });
});

export default router;
