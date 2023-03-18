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
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// document.getElementById('section--1');
// this element return html collections
// const allButton = document.getElementsByTagName('button');

// console.log(allButton);

// it also return live html collection
// document.getElementsByClassName('btn');

// creating and inserting elements
// .insertAdjacentHTML // creating html element jonas favourite

// const message = document.createElement('div');
// console.log(message);

// message.classList.add('cookie-message');
// message.innerHTML =
//   'we use cookies for improved functionality and analytics. <button class="btn btn--close-cookies">Got it!</button>';
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete element
// document
//   .querySelector('.btn--close-cookies')
//   .addEventListener('click', function () {
//     message.remove();
//     message.parentElement.removeChild(message);
//   });

// Refrence Lecture on STYLES, ATTRIBUTES AND CLASSES

// styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// const getMessageHeight = getComputedStyle(message).height;
// message.style.height = parseInt(getMessageHeight) + 30 + 'px';

// console.log(document);
// console.log(
//   document.documentElement.style.setProperty('--color-primary', 'orangered')
// );

// attribute
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';
// Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'Bankist');

// images relative and absolute path

// special type of attribute which is data attribute?
// console.log(logo.dataset.versionNumber);

// classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// for to add multiple classes
// logo.classList.add('c', 'j');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

// console.log(button, section);
btnScrollTo.addEventListener('click', function (e) {
  // btnScrollTo.scrollIntoView(section1);

  const slcoords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);

  // height and width of viewport
  console.log(
    'height/width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window,
  //   scrollTo(
  //     slcoords.left + window.pageXOffset,
  //     slcoords.top + window.pageYOffset
  //   );

  // window.scrollTo({
  //   left: slcoords.left + window.pageXOffset,
  //   top: slcoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
// button.scrollIntoView(section);

// Types of Events and Event handlers
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
  0;
}, 3000);

// Old scroll way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Greqat! you are reading the heading :D');
// };
