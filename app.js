var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const calculate = require('./service/calculate');

const hostname = '127.0.0.1';
const port = 3001;
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.end('Hello Circle CI');
})

app.post('/add', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(calculate.add(req.body.n1, req.body.n2)));
})

app.post('/sub', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(calculate.sub(req.body.n1, req.body.n2)));
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});