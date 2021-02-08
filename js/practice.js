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
