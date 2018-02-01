/**
 * @file 用户页
 * @Author wangjie19
 * @Date 2018-02-01 14:41:42
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-01 14:52:12
 */

import express from 'express';
const router = express.Router();

router.get('/user', (req, res) => {
    res.render('user', {});
});

export default router;
