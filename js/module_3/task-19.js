// Задача. Коллекция значений свойства

// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName).
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('categroy') возвращает [].

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];


function getAllPropValues(propName) {
  const newArr =[]

  for (const product of products) {
    if (propName in product) {
      newArr.push(product[propName])
    }

    // Object.keys(product).includes(propName) 
    //   ? newArr.push(product[propName])
    //   : newArr
      
    /* 
    * !product[propName] ? newArr : newArr.push(product[propName])
    */

    // if (!product[propName]) {
    //   return newArr
    // } 
    // newArr.push(product[propName])
}
return newArr
}
console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));