"use strict"

class UserStorage {
    static #users = {
        id: ["jin", "john"],
        pw: ["0000", "1234"],
        name: ["진", "존"]
    };

    static getUsers(...fields) {
        const users = this.#users;          //class - #users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;     
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // 키값들만 배열로 -> [id, pw, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
}

module.exports = UserStorage;
