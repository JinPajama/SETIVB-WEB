"use strict";

const name = document.querySelector("#name"),
email = document.querySelector("#email"),
content = document.querySelector("#content"),
btn = document.querySelector("#btn");

btn.addEventListener("click", sendContact);

function sendContact(){
    const req = {
        name : name.value,
        email : email.value,
        content : content.value,
    };
    if (!email.value) return alert("회신받을 이메일을 입력해주세요.");
    fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success === true){      //데이터 전송 성공 시
            location.href = "/";
        }
        else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("데이터 전송 중 에러 발생"));
    });
}