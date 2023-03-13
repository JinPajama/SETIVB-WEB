"use strict";

//express로 서버 만들어보기
const express = require('express');
const app = express();
const home = require("./src/routes/home")


//App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); // use  = 미들웨어 등록 메소드

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