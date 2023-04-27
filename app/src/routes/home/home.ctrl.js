"use strict"

const { response } = require("../../../app");
const User = require("../../models/User");

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
        //res.redirect("https://www.naver.com");  //test page
        res.redirect("https://www.dropbox.com/s/yd0t5ntb5kmb2sd/LIST.jpg?dl=1");
        //추후 드롭박스 다운로드 변경
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

};
 
module.exports = {
    output,
    process,
};
