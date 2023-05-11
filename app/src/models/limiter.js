"use strict"

const rateLimit = require("express-rate-limit");

var min = 1;
const limiter = rateLimit({
    windowMs: min * 60 * 1000, // 1 minute
    max: 2, // limit each IP to 2 requests per windowMs
    methods: ['GET', 'POST'],
    message:
      "Too many requests from this IP",
    statusCode: 429, // Set status code for the response
    headers: true, // Enable headers for the response
    handler: function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.setHeader('Retry-After', '60');
        res.status(this.statusCode).json({ 
            message: 'Too many requests from this IP, please try again after a minute' 
        });
    }
});
  
module.exports = limiter;