// объявление переменных

let a = 'hello';
const b = 'hello';
var c = 'hello';

const arr = ['John', 'Igor', 'Sasha', 'Chuvak', 'Bob'];

arr[0] = 'hello';

const word = 'GOIT';

// Принимает один или несколько элементов, которые добавятся в массив и возвращает длинну массива
const aaa = arr.push(word, 'dobavili');
// console.log(arr);

// 3 параметра 
// 1 - индекс по которому начинает изменяться массив
// 2 - число, показывающее количество старых удаляемых из массива элементов
// 3 - Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента
const arrSplice = arr.splice(0,2, 'Marina', "array");
// console.log(arrSplice)

// Добавляет элементы в начало массива и ВОЗВРАЩАЕТ ДЛИНУ МАССИВА
arr.unshift('unshift');
// console.log(arr);

// удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива
const shiftArr = arr.shift();
console.log(shiftArr);


// chaining

arr
.splice(0, 3, 'chaining')
.push('chaining2')

// arr
// .push('some words')
// .shift()

console.log(arr);