"use strict";
let credentials = {
    login: 'admin',
    password: 'qwerty',
};
let box = document.getElementById("box");

function check() {
    if (credentials.login == document.getElementById("log").value && credentials.password == document.getElementById("pass").value) {
        box.style.backgroundColor = 'green';
    } else {
        box.style.backgroundColor = 'red';
    }
}