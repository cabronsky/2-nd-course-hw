const peoples = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(peoples.sort((a, b) => b.age - a.age));
// 1 

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male'
}
console.log(filter([3, -4, 1, 9], isPositive));
const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter(people, isMale));
// 2

const interval = setInterval(() => {
    console.log(new Date().toLocaleString());
}, 3000);
setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
}, 30000);
// 3

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   callback();
}
delayForSecond(function () {
   console.log('Привет, Глеб!');
})
