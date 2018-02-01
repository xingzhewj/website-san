/*
 * @Author:walker
 * @Date: 2018-01-30 22:04:05 
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 10:31:56
 */

import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {});
});

export default router;
