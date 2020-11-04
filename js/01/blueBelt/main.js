"use strict";
let credentials = {
    login: 'admin',
    password: 'qwerty',
};
let diva = document.getElementById("box");

function check() {
    if (credentials.login == document.getElementById("log").value && credentials.password == document.getElementById("pass").value) {
        diva.style.backgroundColor = 'green';
    } else {
        diva.style.backgroundColor = 'red';
    }
}