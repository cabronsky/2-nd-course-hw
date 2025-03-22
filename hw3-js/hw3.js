let password = 'пароль';

let userPassword = String(prompt('введите пароль'));

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}; // 1

let c = 7;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}; // 2

let d = 15;
let e = 11;

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
} // 3

let a = '2';
let b = '3';
alert(Number(a) + Number(b)); // 4


let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
    case 6:
    case 7:
    case 8:
        alert('Лето');
    case 9:
    case 10:
    case 11:
        alert('Осень');
    default:
        alert('Ошибка');
        break;
} // 5

// Доп задание

let x = Number(prompt('Пожалуйста, введите любое число'));