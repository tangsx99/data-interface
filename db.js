//进行数据连接的模块文件

//导入Node 中mysql的配置包
const mysql = require('mysql');

//配置mysql数据库的连接配置
const  conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'boxofficedb',
    multipleStatements:true
});

//建立连接
conn.connect();

// 将数据库连接功能模块导出
module.exports = conn;