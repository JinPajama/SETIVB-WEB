"use strict"

const app = require("../app")
const PORT = 80;

app.listen(PORT, function(){
    console.log(`${PORT}포트에서 서버 가동중`);
});
