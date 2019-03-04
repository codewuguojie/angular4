/**
 * Created by zhailiang on 2017/2/10.
 */
import * as http from 'http';

const server = http.createServer((request, response) => {
    response.end('Hello node!');
});

server.listen(8000);