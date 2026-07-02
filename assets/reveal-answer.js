/**
 * 責務: タッチ端末で reveal 要素をタップ切替（ホバー非対応環境向け）
 */
(function () {
  'use strict';

  function isHoverCapable() {
    return window.matchMedia('(hover: hover)').matches;
  }

  function initializeTapReveal(element, toggleClassName) {
    element.addEventListener('click', function (event) {
      if (isHoverCapable()) {
        return;
      }
      event.preventDefault();
      element.classList.toggle(toggleClassName);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.flashcard[tabindex]').forEach(function (card) {
      initializeTapReveal(card, 'is-revealed');
    });

    document.querySelectorAll('.reveal-row[tabindex]').forEach(function (row) {
      initializeTapReveal(row, 'is-revealed');
    });

    document.querySelectorAll('.reveal-letter-card[tabindex]').forEach(function (card) {
      initializeTapReveal(card, 'is-revealed');
    });
  });
})();
