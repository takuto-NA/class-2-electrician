/**
 * 責務: レッスン内クイズの即時フィードバックを提供する再利用コンポーネント
 */
(function () {
  'use strict';

  function initializeQuiz(quizElement) {
    const correctIndex = parseInt(quizElement.dataset.correct, 10);
    const feedbackCorrect = quizElement.dataset.feedbackCorrect || '正解です。';
    const feedbackWrong = quizElement.dataset.feedbackWrong || 'もう一度考えてみてください。';
    const optionButtons = quizElement.querySelectorAll('.quiz-option');
    const feedbackElement = quizElement.querySelector('.quiz-feedback');

    optionButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        if (quizElement.dataset.answered === 'true') {
          return;
        }
        quizElement.dataset.answered = 'true';

        const isCorrect = index === correctIndex;
        optionButtons.forEach(function (optionButton, optionIndex) {
          optionButton.disabled = true;
          if (optionIndex === correctIndex) {
            optionButton.classList.add('correct');
          }
          if (optionIndex === index && !isCorrect) {
            optionButton.classList.add('wrong');
          }
        });

        feedbackElement.textContent = isCorrect ? feedbackCorrect : feedbackWrong;
        feedbackElement.classList.add('show');
        feedbackElement.classList.add(isCorrect ? 'correct' : 'wrong');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quiz').forEach(initializeQuiz);
  });
})();
