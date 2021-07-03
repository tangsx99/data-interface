
// 导入express
let express = require('express');

// 导入body-parser
const bodyParser = require('body-parser');

// 创建一个app
let  app = express();

// 引入对应的路由
const router = require('./router')

// app中引入cors ， 设置跨域访问
app.use(require('cors')());

// 挂载请求参数处理中间件 post请求
app.use(bodyParser.urlencoded({extended: false}))

// 将参数转为json格式
app.use(bodyParser.json());

// 引入路由
app.use('/', router)

// 对服务器端口进行监听
app.listen(3000, (req, res)=>{
    console.log('http://localhost:3000')
})