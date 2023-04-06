"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
pw = document.querySelector("#pw"),
confirmPw = document.querySelector("#confirm-pw"),
btn = document.querySelector("#btn");

console.log('hello register');

btn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!name.value) return alert("이름을 입력해주세요.");
    if (!pw.value) return alert("패스워드를 입력해주세요.");

    if (pw.value !== confirmPw.value) {
        return alert("비밀번호 재확인이 일치하지 않습니다.");
    }

    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value,
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
            location.href = "/login";
            console.log('/login으로 이동')
        }
        else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}
