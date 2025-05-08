let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
} // 1

let num = [1, 5, 4, 10, 0, 3];
let index = num.indexOf(4);
console.log(index); // 2

let arr2 = [1, 3, 5, 10, 20];
let result = arr2.join(' ');
console.log(result); // 3

let mass = [];
for (let i = 0; i < 3; i++) {
    mass[i] = [];
    for (let j = 0; j < 3; j++) {
        mass[i][j] = 1;
    }
}
console.log(mass); // 4

let one = [1, 1, 1];
one.push(2, 2, 2);
console.log(one); // 5

let a = [9, 11, 8, 7, "a", 6, 5];
a.sort((a, b) => a - b);
console.log(a);
a = a.filter(item => item !== 'a');
console.log(a); // 6

let guess = [9, 8, 7, 6, 5];
let userGuess = prompt('Угадай число');

if (guess.includes(Number(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}; // 7

let str = 'abcdef';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // 8

let arr3 = [[1, 2, 3], [4, 5, 6]];
let flattenedArr = [...arr3[0], ...arr3[1]];
console.log(flattenedArr); // 9

let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < massive.length - 1; i++) {
    let sum = massive[i] + massive[i + 1];
    console.log(sum);
}  // 10

function squareArray(numbers) {
    const squared = numbers.map(num => num * num);
    console.log(squared);
    return squared;
}
squareArray([1, 2, 3, 4, 5]); // 11

function getStringLengths(strings) {
    const lengths = strings.map(str => str.length);
    console.log(lengths);
    return lengths;
}
getStringLengths(['яблоко', 'банан', 'киви', 'груша']); // 12

function getNegativeNumbers(numbers) {
    const negatives = numbers.filter(num => num < 0);
    console.log(negatives);
    return negatives;
}
getNegativeNumbers([3, -1, 0, -7, 8, -2]); // 13

const originalArray = [];
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    originalArray.push(randomNumber);
}
const evenNumbers = originalArray.filter(num => num % 2 === 0);
console.log("Исходный массив:", originalArray);
console.log("Массив чётных чисел:", evenNumbers); // 14

const numbers = [];
for (let i = 0; i < 6; i++) {
  const randomNumbers = Math.floor(Math.random() * 10) + 1;
  numbers.push(randomNumbers);
}
const sum = numbers.reduce((total, num) => total + num, 0);
const average = sum / numbers.length;

console.log("Сгенерированный массив:", numbers);
console.log("Среднее арифметическое:", average); // 15