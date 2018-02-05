/*
 * @Author:walker
 * @Date: 2018-01-30 22:04:05 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-05 17:36:02
 */

import express from 'express';
const router = express.Router();
import request from '../common/request';

router.get('/', async (req, res, next) => {
    try {
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
    } catch (error) {
        res.render('home', {
            list: []
        });
    }
    
});

export default router;
