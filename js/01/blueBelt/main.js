"use strict";
let credentials = {
    login: 'admin',
    password: 'qwerty',
};
let diva = document.getElementsByClassName("login-form");

function check() {
    if (credentials.login == document.getElementById("log").value && credentials.password == document.getElementById("pass").value) {
        diva[0].style.backgroundColor = 'green';
    } else {
        diva[0].style.backgroundColor = 'red';
    }
}