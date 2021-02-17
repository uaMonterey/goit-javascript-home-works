'use strict'

// Строгий режим — "use strict"
// На протяжении долгого времени JavaScript развивался без проблем с обратной совместимостью. 
// Новые функции добавлялись в язык, в то время как старая функциональность не менялась.

// Преимуществом данного подхода было то, что существующий код продолжал работать. 
// А недостатком – что любая ошибка или несовершенное решение, принятое создателями JavaScript, 
// застревали в языке навсегда. Так было до 2009 года, когда появился ECMAScript 5 (ES5). 
// Он добавил новые возможности в язык и изменил некоторые из существующих. Чтобы устаревший 
// код работал, как и раньше, по умолчанию подобные изменения не применяются. 
// Поэтому нам нужно явно их активировать с помощью специальной директивы: "use strict".
// «use strict»
// Директива выглядит как строка: "use strict" или 'use strict'. Когда она находится в начале скрипта, 
// весь сценарий работает в «современном» режиме.

// Фундаментальные принципы объектно-ориентированного программирования на JavaScript
// https://tproger.ru/translations/oop-js-fundamentals/
// Есть 4 основных принципа ООП: Инкапсуляция Абстракция Полиморфизм Наследование

// Классы в js
// Наследование и поиск свойств через __proto__ по цепочке prototype

// class User {
//     #age
//     constructor(userName, surname, age) {
//         this.userName = userName
//         this.surname = surname
//         this.#age = age
//     }

//     get fullName() {
//         return this.userName + ' ' + this.surname;
//     }
    
//     set fullName(value) {
//         const split = value.split(' ');
//         this.userName = split[0];
//         this.surname = split[1];
//     }

//     getUserInfo() {
//         return `Привет из класса User`
//     }
// }

// class UserWork extends User {
//     constructor(userName, surname, age, workPosition, salary) {
//         super(userName, surname, age)
//         this.workPosition = workPosition
//         this.salary = salary
//     }

//     getNewUserInfo() {
//         return this.getUserInfo()
//     }
// }

// class NewObj extends UserWork {
//     constructor(userName, value) {
//         super(userName)
//         this.name = userName
//         this.value = value
//     }

//     sayHello() {
//         return super.getUserInfo()
//     }
// }

// const anna = new User('Anna', 'Prtrovna', 25);
// console.log(anna.fullName)
// anna.fullName = 'Аня Какая-то';
// console.log( anna.userName ); // Аня  (поставил сеттер)
// console.log( anna.surname ); // Какая-то (поставил сеттер)
// const annaWork = new UserWork('Anna', 'Annovna', 22,'sales', 2500);
// const newObj = new NewObj('John', 1999);
// console.log(anna)
// console.log(newObj.__proto__)

// Зачем нужны статические методы

// К примеру есть такой класс "Человечество". У человечества есть характеристика "средний рост", 
// она не применима к отдельному человеку. Метод рассчитывающий средний рост и саму переменную которая 
// его хранит нужно сделать статической.
// Экземпляром класса "Человечество", является отдельный человек. Отдельный человек может иметь свой конкретный рост, 
// вес, цвет волос и так далее, он может ходить, есть, разговаривать - вот эти методы и переменные должны быть динамическими.


// class Component {
//     constructor(selector) {
//         this.$elem = document.querySelector(selector)
//     }

//     hide() {
//         this.$elem.style.display = 'none'
//     }

//     show() {
//         this.$elem.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$elem.style.width = this.$elem.style.height = options.size + 'px'
//         this.$elem.style.backgroundColor = options.color
//         this.$elem.style.border = options.border
//     }

//     getCircle(value) {
//         this.$elem.style.borderRadius = `${value}%`
//     }

//     changePosition() {
//         this.$elem.style.marginLeft = '400px'
//     }
// }

// const div = new Box({
//     selector: '.div',
//     size: 200,
//     color: 'blue',
//     border: '3px solid red',
// })

// const div2 = new Box({
//     selector: '.div2',
//     size: 50,
//     color: 'orange',
//     border: '3px solid red',
// })
// const div3 = new Box({
//     selector: '.div3',
//     size: 100,
//     color: 'pink',
//     border: '3px solid red',
// })
// const div4 = new Box({
//     selector: '.div4',
//     size: 300,
//     color: 'yellow',
//     border: '3px solid red',
// })