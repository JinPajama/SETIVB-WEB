"use strict"

const { response } = require("../../../app");
const User = require("../../models/User");
const fs = require('fs');
const { json } = require("body-parser");

const output = {
    home: (req, res) => {
        res.render('home/index');
    },

    login: (req, res) => {
        res.render('home/login');
    },

    register: (req, res) => {
        res.render('home/register');
    },

    download: (req, res) => {
        res.redirect("https://www.dropbox.com/scl/fi/271ishfxbvf38bn1qmtef/SETIVB.zip?dl=1&rlkey=1lg7q4vwt3qhlr9hd9szqudh9");
    },

    contact: (req, res) => {
        res.render('home/contact');
    }
};

const process = {
    login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    contact : async (req, res) => {
        const data = req.body;
        var contents = fs.readFileSync('src/databases/contact.json', 'utf-8');
        if (!contents) {
            contents += '[]';
        }
        const contacts = JSON.parse(contents);
        var lastData = contacts[contacts.length - 1];
        if (lastData==null){
            lastData = '0';
        }
        data.timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
        contacts.push(data);
        console.log(JSON.stringify(data, null, 2));
        fs.writeFileSync('src/databases/contact.json', JSON.stringify(contacts, null, 2));
        return res.render('home/index');
      }
};

module.exports = {
    output,
    process,
};
