/**
 * @file mysql主脚本
 * @Author wangjie19
 * @Date 2018-02-07 15:13:35
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-02-08 16:46:09
 */

import mysql from 'promise-mysql';
import mysqlConfig from './mysql.config';

const {host, user, password, database} = mysqlConfig;
const pool = mysql.createPool({
    host,
    user,
    password,
    database,
    connectionLimit: 10
});

function connect(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection()
            .then(conn => {
                return conn.query(sql);
            })
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    });
    
}

export default {
    pool,
    querySql: connect
};