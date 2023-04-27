"use strict";

const btn = document.getElementById("downbtn");

btn.addEventListener("click", download);

function download() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/download');
    xhr.send();}