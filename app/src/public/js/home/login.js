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

    fetch("/login", {
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
        console.error(new Error("로그인 중 에러 발생"));
    });
}
