import users from '../../../users.js';

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name);
// const getUserNames = users => users.map(({ name }) => name); //! with using destructuring

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ];
