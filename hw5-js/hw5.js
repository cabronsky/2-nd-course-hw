function getMin(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(getMin(8, 4)); 
console.log(getMin(6, 6)); // 1

function num(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
console.log(num(7)); 
console.log(num(10)); // 2

function printSquare(num) {
    console.log(num * num);
}
printSquare(5);

function getSquare(num) {
    return num * num;
}
let result = getSquare(7);
console.log(result); // 3

function checkAge() {
    let age = Number(prompt("Сколько вам лет?"));

    if (age < 0 || isNaN(age)) {
        alert("Вы ввели неправильное значение");
    } else if (age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
checkAge();  // 4

function numbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    }
    return Number(a) * Number(b);
}
console.log(numbers(5, 3));      
console.log(numbers("4", "2"));  
console.log(numbers("abc", 2)); 
console.log(numbers(7, null));  // 5

function cubeNumber() {
    let num = Number(prompt("Введите число:"));

    return isNaN(num) 
        ? alert("Переданный параметр не является числом") 
        : alert(`${num} в кубе равняется ${num ** 3}`);
}
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
} // 6

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius; 
}

const circle1 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
};

const circle2 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter()); // 7

