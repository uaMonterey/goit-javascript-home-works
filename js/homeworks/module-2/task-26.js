// Цикл for...of

// Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

// for (const variable of iterable) {
 // тело цикла
// }
// variable — переменная, которая будет хранить значение элемента на каждой итерации.
// iterable — коллекция, которая имеет перечислимые элементы, например массив.
// const planets = ['Земля', 'Марс', 'Венера'];

// for (const planet of planets) {
//   console.log(planet);


  // }
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму.


function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }

for (const element of order) {
     
  total += element;
}

  // Пиши код выше этой строки
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));