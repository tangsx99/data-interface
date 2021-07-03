// 导入expres 模块
let express = require('express');

//加载路由
let router = express.Router();

// 引入数据库连接模块
const conn = require('./db');

// 查询数据 2020
router.get('/movie/get2020', (req, res)=>{
    let sqlStr = 'select * from box_office_2020';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {
            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 2019
router.get('/movie/get2019', (req, res)=>{
    let sqlStr = 'select * from box_office_2019';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {
            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 2018
router.get('/movie/get2018', (req, res)=>{
    let sqlStr = 'select * from box_office_2018';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {
            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 2017
router.get('/movie/get2017', (req, res)=>{
    let sqlStr = 'select * from box_office_2017';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {
            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 2016
router.get('/movie/get2016', (req, res)=>{
    let sqlStr = 'select * from box_office_2016';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 首日票房
router.get('/movie/getFirst', (req, res)=>{
    let sqlStr = 'select * from box_office_first_day';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 单日票房
router.get('/movie/getOne', (req, res)=>{
    let sqlStr = 'select * from box_office_one_day';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 年度票房
router.get('/movie/getYear', (req, res)=>{
    let sqlStr = 'select * from year_box_office';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

// 查询数据 进行分页2020 返回 接受post和get请求
router.all('/movie/list/get2020', function(req, res, next){
    var param = '';
    // 设置请求头格式 utf-8
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    // 数据分页查询设置
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM box_office_five_years WHERE times=2020 ; SELECT * FROM box_office_five_years WHERE times=2020 limit ' + start + ',10 ';
        conn.query(sql,function (err, results) {
            if (err){
                throw err
            }else{
                // 计算总页数
                var allCount = results[0][0]['COUNT(*)'];
                var allPage = parseInt(allCount)/10;
                var pageStr = allPage.toString();
                // 不能被整除
                if (pageStr.indexOf('.')>0) {
                    allPage = parseInt(pageStr.split('.')[0]) + 1;
                }
                var moviesList = results[1];
                res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
            }
        })
})

// 查询数据 进行分页2019 返回 接受post和get请求
router.all('/movie/list/get2019', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM box_office_five_years WHERE times=2019 ; SELECT * FROM box_office_five_years WHERE times=2019 limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})

// 查询数据 进行分页2018 返回 接受post和get请求
router.all('/movie/list/get2018', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM box_office_five_years WHERE times=2018 ; SELECT * FROM box_office_five_years WHERE times=2018 limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})

// 查询数据 进行分页2017 返回 接受post和get请求
router.all('/movie/list/get2017', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM box_office_five_years WHERE times=2017 ; SELECT * FROM box_office_five_years WHERE times=2017 limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})

// 查询数据 进行分页2016 返回 接受post和get请求
router.all('/movie/list/get2016', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM box_office_five_years WHERE times=2016 ; SELECT * FROM box_office_five_years WHERE times=2016 limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})

// 查询数据 进行分页豆瓣高分票房 返回 接受post和get请求
router.all('/movie/list/douban', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM movies_great; SELECT * FROM movies_great limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})

// 查询年度票房
router.get('/movie/film_years', (req, res)=>{
    let sqlStr = 'select years from movies_great';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

// 查询五年内 前30
router.get('/movie/film_top30_table', (req, res)=>{
    let sqlStr = 'select * from movies_t30';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {
            res.json({code: 0, data:results})
        }
    })
})

// 查询五年内 前30 分析
router.get('/movie/film_top30_analyse', (req, res)=>{
    let sqlStr = 'select * from movies_analyse_t30';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {
            res.json({code: 0, data:results})
        }
    })
})



//电影演员
router.get('/movie/film_actor_charts', (req, res)=>{
    let sqlStr = 'select * from analyse_data where mark = "movie_actor" ';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})


//流行电影类型
router.get('/movie/film_type_charts', (req, res)=>{
    let sqlStr = 'select * from analyse_data where mark = "pop_type" ';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

//流行电影 地图charts
router.get('/movie/film_map_charts', (req, res)=>{
    let sqlStr = 'select * from analyse_data where mark = "movie_map" ';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

//流行电影 国家charts
router.get('/movie/film_country_charts', (req, res)=>{
    let sqlStr = 'select * from analyse_data where mark = "movie_country" ';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})

//流行电影 演员charts
router.get('/movie/film_t30_actor_charts', (req, res)=>{
    let sqlStr = 'select * from analyse_data where mark = "movie30_actor" ';
    conn.query(sqlStr, (err, results)=>{
        if(err){
            res.json({code:500, msg:'获取数据失败'})
        }else {

            res.json({code: 0, data:results})
        }
    })
})


// 查询数据 进行分页豆瓣高分票房 返回 接受post和get请求
router.all('/movie/list/douban', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM movies_great; SELECT * FROM movies_great limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})


// 查询数据 进行分页猫眼榜单 返回 接受post和get请求
router.all('/movie/list/maoyan', function(req, res, next){
    var param = '';
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.method == "POST") {
        param = req.body;
    } else{
        param = req.query || req.params;
    }
    if (param.page == '' || param.page == null || param.page == undefined) {
        res.end(JSON.stringify({msg:'请传入参数page',status:'0'}));
        return;
    }
    var start = (param.page - 1) * 10;
    var sql = 'SELECT COUNT(*) FROM maoyan_top100; SELECT * FROM maoyan_top100 limit ' + start + ',10';
    conn.query(sql,function (err, results) {
        if (err){
            throw err
        }else{
            // 计算总页数
            var allCount = results[0][0]['COUNT(*)'];
            var allPage = parseInt(allCount)/10;
            var pageStr = allPage.toString();
            // 不能被整除
            if (pageStr.indexOf('.')>0) {
                allPage = parseInt(pageStr.split('.')[0]) + 1;
            }
            var moviesList = results[1];
            res.end(JSON.stringify({msg:'操作成功',status:'200',total:allCount,pageSize: 10, totalPages:allPage, currentPage:param.page, data:moviesList}));
        }
    })
})




// 导出路由模块
module.exports = router;