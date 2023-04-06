"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, pw } = UserStorage.getUserInfo(body.id);
        
        if (id) {
            if ( id === body.id && pw === body.pw){
                return { success: true };
            }
            return { success: false, msg: "패스워드 오류"};
        }
        return { success: false, msg: "존재하지 않는 ID 입니다."};
    }
}

module.exports=User;