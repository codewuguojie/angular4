"use strict";
/**
 * Created by zhailiang on 2017/2/10.
 */
var http = require('http');
var server = http.createServer(function (request, response) {
    response.end('Hello node!');
});
server.listen(8000);
