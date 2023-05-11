"use strict";

//express로 서버 만들어보기
const express = require('express');
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const home = require("./src/routes/home");
const bodyParser = require('body-parser');
const connect = require('./src/databases/db')
//App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', home); // use  = 미들웨어 등록 메소드

connect();

/*
app.get('/', function(req, res){
    res.render('home/index');
});

app.get('/login', (req, res) => {
    res.render('home/login');
});
*/

/*
//http로 서버 만들어보기
const http = require('http')
const app = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8' });
    console.log(req.url);
    if (req.url === '/') {
        res.end('Here is root');
    }
    else if (req.url === '/login'){
        res.end('Here is Login 로그인');
    }
});

app.listen(3001, () => {
    console.log('Run with using HTTP');
});*/

module.exports = app;