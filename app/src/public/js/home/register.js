"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
pw = document.querySelector("#pw"),
confirmPw = document.querySelector("#confirm-pw"),
btn = document.querySelector("#btn");

console.log('hello register');

btn.addEventListener("click", register);

function register(){
    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value,
        confirmPw : confirmPw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success === true){      //로그인 성공 시
            location.href = "/";
        }
        else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}
