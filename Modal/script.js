'use strict';

const modals = document.querySelectorAll('.show-modal');
const closeEl = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');
const modalEl = document.querySelector('.modal');

modals.forEach(modal => {
  modal.addEventListener('click', openModal);
});

closeEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
document.addEventListener('keydown', escapeBtn);

function closeModal() {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
}

function openModal() {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
}

function escapeBtn(e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
}
