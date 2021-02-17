
// TASK 1
// Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
// alert( fruits.length );

// TASK 2
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function getMin(a, b) {
  return a > b ? b : a;
}

// TASK 3
// Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

function getPow(x, n) {
  return x**n;
}

// function getPow(x, n) {
//   return Math.pow(x,n);
// }

// TASK 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function isAdult(age) {
  return age >= 18 ? true : confirm(age)
}

// TASK 5
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

const someArr = [22, 11, 34, 5, 12, 13, 14, 15]

// TASK 5
// Напишите решение, которое вычисляет сумму 
// квадратных корней для всех чётных чисел целочисленного массива.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

const getSum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      sum += Math.sqrt(arr[i])
    }
  }
  return sum;
}

// console.log(getSum(arr))

//  вариант 2

// TASK 6
// Напиши функцию которая перебирает массив логинов и проверяет
// есть ли имя введенное в инпут в этом массиве и в случае, если есть - выводит сообщение "Доступ разрешен"

const arr = ['Egor kreed', 'Janna Friskie', 'Filipp Kirkorov']

// let value = prompt();
const getAcces = function(arr){
  return arr.includes(value) ? 'доступ разрешен' : 'доступ запрещен'
}

// console.log(getAcces(arr))

// console.log(getName(arr))

// TASK 7

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

const styles = ['Джаз', 'Блюз'];

// TASK 8 
// привести массив к одному уровню

const tryThis = [[23, 11, [ 'hello', 'gays']], 'some str', [777, 'word', ['Привет', ['как сюда добраться']]]];

const getNewArr = (arr) => arr.join(',').split(',');
console.log(getNewArr(tryThis))
// console.log(styles)

// Перебрать массив и добавить к числам какое-то значение

const arr2 = [[[22,23]], [[77, 23]], [[88, 12]], [[99, 144]]];

const res = arr2.map(elem => elem.map(elem => elem.map(elem => elem + 5)));

console.log(res)