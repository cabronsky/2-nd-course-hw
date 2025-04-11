function guessNumberGame() {
    const number = 88;
    let userGuess;

    while (userGuess !== number) {
        userGuess = Number(prompt("Угадайте число от 1 до 100:"));

        if (userGuess < number) {
            alert("Загаданное число больше.");
        } else if (userGuess > number) {
            alert("Загаданное число меньше.");
        } else {
            alert("Поздравляю! Вы угадали число!");
        }
    }
}

guessNumberGame();