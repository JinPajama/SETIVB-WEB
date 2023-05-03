"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require("./home.ctrl");
const limiter = require("../../models/limiter.js");

router.get("/", ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/download', limiter, ctrl.output.download);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = router;