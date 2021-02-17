import users from '../../../users.js';

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// ! Filter
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

// ! Reduce
// const getUsersWithAge = (users, min, max) => {
//   return users.reduce((acc, user) => {
//     if (user.age >= min && user.age <= max) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);
// };

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
