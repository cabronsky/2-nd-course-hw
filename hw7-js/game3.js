function reverseTextGame() {
  const userInput = prompt("Введи текст:");
  const upperCaseInput = userInput.toUpperCase();
  const reversed = upperCaseInput.split('').reverse().join('');
  alert("Перевёрнутый текст: " + reversed);
}

reverseTextGame();