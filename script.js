'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// console.log(btnsOpenModal, 'btnsOpenModal');
// // for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal.forEach(btn => {
//   btn.addEventListener('click', openModal);
// });

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// Selecting Element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
// this element return html collections
const allButton = document.getElementsByTagName('button');

console.log(allButton);

// it also return live html collection
document.getElementsByClassName('btn');

// creating and inserting elements
// .insertAdjacentHTML // creating html element jonas favourite

const message = document.createElement('div');
console.log(message);

message.classList.add('cookie-message');
message.innerHTML =
  'we use cookies for improved functionality and analytics. <button class="btn btn--close-cookies">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete element
document
  .querySelector('.btn--close-cookies')
  .addEventListener('click', function () {
    message.remove();
  });
