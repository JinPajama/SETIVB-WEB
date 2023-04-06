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
};

const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

    //     const id = req.body.id,
    //     pw = req.body.pw;

    //     console.log(userStorage.getUsers('id'));
    //     const users = userStorage.getUsers('id', 'pw');

    //     const response = {};
    //     if (users.id.includes(id)) {
    //         const idx = users.id.indexOf(id);
    //         if (users.pw[idx]===pw){
    //             response.success = true;
    //             return res.json(response);
    //         }
    //     }

    // response.success = false;
    // response.msg = "Login Failed";
    // return res.json(response);
    },
};

// const process = {
//     login: (req, res) => {
//         const id = req.body.id,
//         pw = req.body.pw;

//         if (users.id.includes(id)) {
//             users.id.indexOf(id);
//             if (users.pw[idx] === pw) {
//                 return res.json({
//                     success : true,
//                 });
//             }
//         }

//         return res.json({
//             success: false,
//             msg: "Login failed",
//         });
//     },
// };
 
module.exports = {
    output,
    process,
};
