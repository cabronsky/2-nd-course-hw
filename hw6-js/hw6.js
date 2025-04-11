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

let arrr = [1, 3, 5, 10, 20];
let result = arrr.join(' ');
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

let a = [9, 8, 7, 'a', 6, 5];
a.sort();
a = a.filter(item => item !=='a');
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

let ar = [[1, 2, 3], [4, 5, 6]];
let flattenedArr = [...ar[0], ...ar[1]];
console.log(flattenedArr); // 9

let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < massive.length - 1; i++) {
    let sum = massive[i] + massive[i + 1]; 
    console.log(sum);
}  // 10

