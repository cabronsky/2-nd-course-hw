let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr); // 1

function filterByStart(stringsArray, startString) {
    const lowerStart = startString.toLowerCase();

    return stringsArray.filter(str =>
        str.toLowerCase().startsWith(lowerStart)
    );
}
const words = ["Apple", "apricot", "banana", "Avocado", "berry"];
const result = filterByStart(words, "ap");
console.log(result); // 2 

const number = 32.58884;
const roundedDown = Math.floor(number);
const roundedUp = Math.ceil(number);
const roundedNearest = Math.round(number);

console.log('округление вниз', roundedDown);
console.log('округление вверх', roundedUp);
console.log('округление ближайшее', roundedNearest); // 3

let numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('min', min);
console.log('max', max);  // 4

function random() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log('рандомное число:', randomNumber);
}
random();
// 5

function getRandomNumber(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(getRandomNumber(10)); // 6

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 100)); // 7

console.log(new Date()); // 8

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log("Дата через 73 дня:", currentDate.toLocaleDateString());
// 9

function formatDateTime(date) {
    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник",
        "среда", "четверг", "пятница", "суббота"
    ];

    const months = [
        "января", "февраля", "марта", "апреля",
        "мая", "июня", "июля", "августа",
        "сентября", "октября", "ноября", "декабря"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.
Время: ${hours}:${minutes}:${seconds}`;
}
const now = new Date();
console.log(formatDateTime(now)); // 10