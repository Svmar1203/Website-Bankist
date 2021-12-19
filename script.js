'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSection = document.querySelectorAll('.section');
console.log(allSection);
const one = document.getElementById('section--1');
console.log(one);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.width);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.getElementById('logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'p');
logo.classList.remove('c', 'p');
//logo.classList.toggle();
//logo.classList.contains();

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scroling
  //window.scrollTo(
  //s1coords.left + window.pageXOffset,
  //s1coords.top + window.pageYOffset
  //);

  /*
  // Old school
  window.scrollTo({
    legft: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
*/

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('Hello!!!!');

  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

/*
h1.onmouseenter = function (e) {
  alert('This is EventLisstener');
};
*/

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link', e.target);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('CONTAINER', e.target);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('NAV');
  this.style.backgroundColor = randomColor();
});
