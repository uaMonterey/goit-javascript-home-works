import users from '../../../users.js';

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users =>
  users.reduce((acc, user) => (acc += user.balance), 0);

console.log(calculateTotalBalance(users)); // 20916
