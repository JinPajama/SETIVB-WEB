"use strict"

class UserStorage {
    static #users = {
        id: ["jin", "john"],
        pw: ["0000", "1234"],
        name: ["진", "존"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
