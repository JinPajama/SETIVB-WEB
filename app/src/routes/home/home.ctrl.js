"use strict"

const userStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render('home/index');
    },

    login: (req, res) => {
        res.render('home/login');
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
        pw = req.body.pw;

        console.log(userStorage.getUsers('id', 'pw'));
        const users = userStorage.getUsers('id', 'pw');

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx]===pw){
                response.success = true;
                return res.json(response);
            }
        }

    response.success = false;
    response.msg = "Login Failed";
    return res.json(response);
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
