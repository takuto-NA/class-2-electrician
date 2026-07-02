/**
 * 責務: タッチ端末でフラッシュカードをタップ切替（ホバー非対応環境向け）
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.flashcard[tabindex]').forEach(function (card) {
      card.addEventListener('click', function (event) {
        if (window.matchMedia('(hover: hover)').matches) {
          return;
        }
        event.preventDefault();
        card.classList.toggle('is-revealed');
      });
    });
  });
})();
