// Крайние элементы массива

// Задание
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// Тесты
// Объявлена функция getExtremeElements(array).
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5].
// Вызов getExtremeElements(['Земля', 'Марс', 'Венера']) возвращает ['Земля', 'Венера'].
// Вызов getExtremeElements(['яблоко', 'персик', 'груша', 'банан']) возвращает ['яблоко', 'банан'].


function getExtremeElements(array) {
 const firstIndex = array[0];
 const lastIndex = array[array.length -1];
 const newArray = [firstIndex, lastIndex];

 return newArray;

}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));

