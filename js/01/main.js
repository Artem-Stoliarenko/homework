"use strict";
alert('Считалка суточной нормы расхода каллорий.');

let gender = prompt ('Ваш пол? Введите (Женщина или Мужчина) ','Мужчина');
let weight = prompt ('Какой ваш вес в КГ?','72');
let height = prompt ('Какой ваш рост в СМ?','182');
let age = prompt ('Сколько вам полных лет?','29');

function callKcl(arg1,arg2,arg3,arg4) {
    return arg1 + (arg2 * weight)+ (arg3 * height) - (arg4 * age);
}

if (gender.toLocaleLowerCase() == 'мужчина') {
    alert("Вам надо потратить " + (callKcl(66.5,13.75,5.003,6.775) + " каллорий."));
} else if (gender.toLocaleLowerCase() == 'женщина') {
    alert("Вам надо потратить " + (callKcl(655.1,9.563,1.85,4.676) + " каллорий."));
} else {
    alert('Перезагрузите страницу и введите корректно.');
}
