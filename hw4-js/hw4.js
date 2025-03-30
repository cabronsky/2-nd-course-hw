let a = 1;
let b = Number(2);
while (a <= b) {
    console.log('привет');
    a++;
} // 1

let c = 1;
while (c <= 5) {
    console.log(c);
    c++;
} // 2

for (let d = 7; d <= 22; d++) {
    console.log(d);  
} // 3

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};
for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
} // 4

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`результат ${num}`);
// 5

let friday = 5;
let days = 31;
for (let p = friday; p <= days ; p += 7) {
    console.log(`сегодня пятница ${p} число. Необходимо подготовить отчет.`);
} // 6