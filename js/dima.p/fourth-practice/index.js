// DOM document object model
import cards from './data.js';

const ulRef = document.querySelector('.list');
const formRef = document.querySelector('.form');
const todoListRef = document.querySelector('.todo-list');
const modalRef = document.querySelector('.modal');
const modalIgmRef = document.querySelector('.modal__img');
const filterRef = document.querySelector('.filter');

// Работа с DOM нодами

// Статья про псевдомассивы https://habr.com/ru/post/336136/
const res = [...ulRef.children];
console.log(res.map(el => el));
console.dir(res);

// Рендер списка картинок на страничке

const someListRef = document.createElement('ul');

document.querySelector('body').append(someListRef);

const markup = cards.map(({ name, id, description, url }) => {
  const liRef = document.createElement('li');
  liRef.classList.add('cars-item');
  liRef.innerHTML = `<p>${name} айдишник: ${id}</p><img src=${url} width="300" alt='${description}'/>`;
  return liRef;
});
someListRef.append(...markup);

const reduceMarkup = cards.reduce(
  (acc, { name, id, description, url }) =>
    acc +
    `<li><p>${name} айдишник: ${id}</p><img src=${url} width="300" alt='${description}'/></li>`,
  '',
);
someListRef.insertAdjacentHTML('beforeend', reduceMarkup);

// модалка

someListRef.addEventListener('click', e => {
  if (e.target.localName === 'img') {
    modalIgmRef.src = e.target.src;
    modalRef.style.display = 'block';
  }
  // e.target.alt === 'BMW' ? modalRef.style.display = 'block' : alert('ты кликнул не на bmw ');
});

// закрытие модалки по escape

window.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    modalRef.style.display = 'none';
  }
});

// закрытие модалки при клике на оверлей

modalRef.addEventListener('click', e => {
  if (e.target.localName !== 'img') {
    modalRef.style.display = 'none';
  }
});

// TODO

// const todoArr = []

// formRef.addEventListener('submit', e => {
//     e.preventDefault();
//     todoListRef.innerHTML = ''
//     todoArr.push(`<li><p>${e.currentTarget[0].value}<p></li>`)
//     // todoListRef.innerHTML = todoArr.join('')
//     todoListRef.insertAdjacentHTML('beforeend', todoArr.join(''))
//     e.currentTarget[0].value = ''
// })

// filterRef.addEventListener('input', e => {
//     const filteredArr = [...todoListRef.children].filter(el => el.innerText.includes(e.currentTarget.value) && e.currentTarget.value !== '')
//     const filter = filteredArr.map(el => `<li><p>${el.innerText}</p></li>`)
//     if(filteredArr.length > 0) {
//         todoListRef.innerHTML = ''
//         todoListRef.insertAdjacentHTML('beforeend', filter.join(''))
//     }
//     else {
//         todoListRef.innerHTML = ''
//         todoListRef.insertAdjacentHTML('beforeend', todoArr.join(''))
//     }
// })

// const ulRef = document.querySelector('.list')

// ulRef.innerHTML = '<li><p>Some words</p></li>'s
// console.dir(ulRef)
// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = () => {
//       /*
//        * Стрелки запоминают контекст во время объявления,
//        * из родительской области видимости
//        */
//       console.log('this in fn: ', this);
//     };
//     fn();
//     console.log('this in showThis: ', this);
//   },
// };
// hotel.showThis();
