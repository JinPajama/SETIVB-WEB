const mongoose = require('mongoose');
const DB = 'admin';

const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }

    mongoose.connect(`mongodb://root:1234@localhost:27017/${DB}`, {
        useNewUrlParser: true,
    });

    console.log('DB Connected!');
}
const db = mongoose.connection;

db.on("error", (error) => console.log("DB error : ", error));
db.on("disconnected", () => {
    console.error("Disconnected to DB, Retry to connect");
    connect();
});

module.exports = connect;