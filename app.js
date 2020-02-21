var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const calculate = require('./service/calculate');

const hostname = '0.0.0.0';
const port = 3000;
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.end('Hello Node/Circle CI');
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
    console.log(`Server running with docker at http://${hostname}:${port}/`);
});