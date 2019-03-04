/**
 * Created by zhailiang on 2017/2/10.
 */
import * as express from "express";
const app = express();

app.get('/', (req, res) => res.send('Hello Express'));

app.get('/products', (req, res) => res.send('接收到查询商品信息的请求'));

const server = app.listen(8000, "localhost", () => {
    console.log('服务器启动:http://localhost:8000');
});