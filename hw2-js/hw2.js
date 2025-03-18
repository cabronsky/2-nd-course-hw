let a = Number(10);
alert(a); 
a = Number(20);
alert(a); // 1

const iphone = alert('Год выпуска первого Iphone'); // 2

const javaScript = alert('Имя создателя JS'); // 3

let b = Number(2);
a = Number(10);
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b); // 4

let result = Number(alert(b**5)); // 5

a = Number(9);
let remainder = Number(alert(a%b)); // 6

let age = Number(prompt('Сколько вам лет?'));
alert(age); // 8

let user = {
    name: '',
    age: Number,
    isAdmin: true }; 
let info = prompt("Ваше имя", "name");
alert(`Привет, ${info}`); // 9, 10
