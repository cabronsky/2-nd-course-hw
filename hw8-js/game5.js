const choices = ["камень", "ножницы", "бумага"];

const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

if (!choices.includes(userChoice)) {
    alert("Неверный выбор. Попробуйте еще раз.");
  } else { 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (userChoice === computerChoice) {
        result = "Ничья!";
      } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
      ) {
        result = "Вы победили!";
      } else {
        result = "Вы проиграли.";
      }
      alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`);
}
