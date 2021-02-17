import users from '../../../users.js';

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => {
    if (user.eyeColor === color) {
      return user.name;
    }
  });

// ! Тернартиком
// const getUsersWithEyeColor = (users, color) =>
// users.filter(user => (user.name ? user.eyeColor === color : false));

// ! with using destructuring
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
