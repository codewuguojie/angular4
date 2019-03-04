"use strict";
/**
 * Created by zhailiang on 2017/2/10.
 */
var express = require("express");
var app = express();
app.get('/', function (req, res) { return res.send('Hello Express'); });
app.get('/products', function (req, res) { return res.send('接收到查询商品信息的请求'); });
var server = app.listen(8000, "localhost", function () {
    console.log('服务器启动:http://localhost:8000');
});
