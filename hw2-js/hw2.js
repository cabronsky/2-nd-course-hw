let a = 10;
alert(a); 
a = 20;
alert(a); // 1

const iphone = alert('Год выпуска первого Iphone'); // 2

const javaScript = alert('Имя создателя JS'); // 3

let b = 2;
a = 10;
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b); // 4

let result = (alert(b**5)); // 5

a = 9;
let remainder = (alert(a%b)); // 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num); // 7

let age = Number(prompt('Сколько вам лет?'));
alert(age); // 8

const user = {
    name: '',
    age: 25,
    isAdmin: true }; 
let info = prompt("Ваше имя", "name");
alert(`Привет, ${info}`); // 9, 10

let number = Number(prompt('Загадай число'));
let newNumber = number * 2;
alert(newNumber);
let nextNumber = newNumber + 10;
alert(nextNumber);
let fourthNumber = nextNumber / 2;
alert(fourthNumber);
let yourResult = fourthNumber - number;
alert(`Ваш результат равен ${yourResult}`); // доп задание
