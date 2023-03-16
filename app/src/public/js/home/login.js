"use strict";

const id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
btn = document.querySelector("#btn");

btn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };
    console.log('asdf'); 
    console.log(req);   
}