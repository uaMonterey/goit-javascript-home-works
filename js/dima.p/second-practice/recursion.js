// Рекурсия это возможность функции вызывать саму себя

// function getFactorial(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n*getFactorial(n-1)
// }

// 5 * getFactorial(4);
// 5 * (4 * getFactorial(3))
// 5 * (4 * ( 3 * getFactorial(2)))
// 5 * (4 * ( 3 * (2 * getFactorial(1))))

// console.log(getFactorial()); // 120

// Лексиченское окружение и замыкание
// Имитация лексического окружения

// const environment = {
//     name: 'Vasya',
//     age: 30,
// }

// const environment2 = {
//     name: 'Костя',
//     age: 13,
// };

// console.log(fu = function(name, age){
//     this.res = 'new string'
//     return this
//     // return `Name: ${this[name]}, Age: ${this[age]}. Some res ${this.res}`
// }
// .bind(environment)()
// .hello = 'Igor')

// fu = function(name, age){
//     this.res = 'new string'
//     return this
//     // return `Name: ${this[name]}, Age: ${this[age]}. Some res ${this.res}`
// }.bind(environment)

// console.log(environment)

// console.log(fu("name", 'age'))

// console.log(environment)

// const num = 10;

// const getSum = () => {
//     let value = 10;

//     return function() {
//         return value += 10 
//     }
// }

// const res = getSum()

// console.log(res())
// console.log(res())
// console.log(res())

// num = 20;

// console.log(getSum())

// const getNewSum = () => {
//     let newNum = 10;
//     // return newNum + 1
//     return (function() {
//         return newNum + 12;
//     })()
// }


// const res = getNewSum();
// console.log(res)

// IIFE - immediately-invoked function expressions
// (() => {
//     alert('hello')
// })()

// (function func() {
//     alert('hello 1 ')
// }())

// !function() {
//     alert('hello 2 ')
// }()

// +function() {
//     alert('hello 1 ')
// }()

// callback функции 

// const askName = (callback) => {
//     const name = prompt('Как вас зовут?')
//     callback(name)
// }

// askName(callback)

// function callback(name) {
//     alert(`Привет, меня зовут ${name}`)
// }

// const arr = [2, 3, 564, 74, 8, 68, 6, 45, 24, 2, 4]

// const resArr = arr.map(function(number){
//     return number*2
// })
// console.log(resArr)

// const callback = (name) => {
//     alert(`Привет, меня зовут ${name}`)
// }

// const askName = (callback) => {
//     const name = prompt('Как вас зовут?')
//     callback(name)
// }

// askName(callback)

