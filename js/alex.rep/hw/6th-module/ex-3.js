import users from '../../../users.js';

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// ! Chaning fileter > map
const getUsersWithGender = (users, gender) =>
  users
    .filter(user => {
      if (user.gender === gender) {
        return user.name;
      }
    })
    .map(user => user.name);

// ! Minimalizm
// const getUsersWithGender = (users, gender) =>
//   users.filter(user => user.gender === gender).map(user => user.name);

// ! Reduce
// const getUsersWithGender = (users, gender) =>
//   users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
