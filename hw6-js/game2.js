function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let question = '';
    let correctAnswer;
    if (operation === '+') {
        question = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
      } else if (operation === '-') {
        question = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
      } else if (operation === '*') {
        question = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
      } else if (operation === '/') {
        question = `${num1 * num2} / ${num2}`; 
        correctAnswer = num1;
      }
    
      return { question, correctAnswer };
    }
    function startGame() {
        const { question, correctAnswer } = generateQuestion();
        const userAnswer = parseFloat(prompt(`Решите задачу: ${question}`));
        if (userAnswer === correctAnswer) {
            alert("Верно! Молодец!");
          } else {
            alert(`Неверно! Правильный ответ: ${correctAnswer}`);
          }
    }
    startGame();
        