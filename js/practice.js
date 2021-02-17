// const arr = [5, 1, 2, 10, 3, 4];

// const parabol = arr => {
//   const arr1 = arr.filter(element => element % 2 === 0);
//   const arr2 = arr.filter(element => element % 2 !== 0);

//   const arr3 = [...arr2.sort(), ...arr1.sort((a, b) => b - a)];

//   return arr3; /* result */
// };
// console.log(parabol(arr)); // [1, 3, 5 , 10, 4, 2]

/* 
Task 7
Напиши функцию, которая будет принимать 2 параметра, первый это объект user2 который будем перебирать
и второй это строка - имя ключа, который лежит в последнем по вложенности объекте
Результат вызова функции - это значение ключа, который мы передаем вторым параметром в функцию
Перебираем сначала конкретный объект, когда напишите функцию для объекта user2, можно будет ее оптимизировать
под разные объекты

const user2 = {
  name: 'Hacker',
  userTechnologies: {
    frameworks: {
      react: 'this is library',
      vue: 'i like this frame',
      angular: 'maybe sometime',
      libraries: {
        axios: 5,
        lodash: 4,
        pnotify: 3,
      },
    },
  },
};

console.log(getNestedName(user2, 'axios'))  // 5
console.log(getNestedName(user2, 'lodash'))  // 4
console.log(getNestedName(user2, 'pnotify')) // 3 */

// !Factorial
// function factorial(num) {
//   if (num === 1) {
//     return num;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));
//!....................................

// const validatePin = pin => {
//   console.log(!isNaN(pin));
//   if (pin.length === 4 || pin.length === 6) {
//   }
//   return false;
// };

// function validatePIN(pin) {
//   console.log(pin.trim());
//   let str = pin.split('');
//   return str.length == 4 || str.length == 6
//     ? str.map(el => Number(el)).filter(num => Number.isInteger(num)).length ==
//         str.length
//     : false;
// }

// console.log(validatePIN('2126'));

//!PARABOLA
// const arr = [5, 1, 3, 11, 3, 7, 13, 8,2];
// let arr1 = [];
// arr1.push(...(arr.sort((a, b) => a - b).filter((el,i)=>i%2!==0)))
// arr1.push(...(arr.sort((a, b) => a - b).filter((el,i)=>i%2===0).sort((a,b)=>b-a)))
// if(arr1.length%2 ===0){
//   arr1.reverse()
// }
// console.log(arr1) // [2, 3, 7, 11, 13, 8, 5, 3, 1]
//!...................................................
