// Task 1
// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

const user = {
    name: 'Peter',
    surname: 'Parker',
    age: 22,
    position: 'spider-man'
}

// вызов функции для проверки работоспособности
// console.log(user.getInfo()) 

// Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

const obj = {
    name: 'Igor',
    car:  'Mercedes',
    carColor: 'black'
}

// console.log('name' in obj)

// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника
// *решить в одну строку

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать 
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

const obj1 = {
    'my name': 'John',
    'i like my work': true,
    'programming languages': ['js', 'java', 'c++']
}

// вызов функции для проверки работоспособности
// getArr('programming languages')

// Task 5
// Напиши функцию которая будет считать факториал числа, обязательно использовать рекурсию

// Task 6
// Напиши функцию, которая будет принимать 2 параметра, первый это объект user2 который будем перебирать
// и второй это строка - имя ключа, который лежит в последнем по вложенности объекте
// Результат вызова функции - это значение ключа, который мы передаем вторым параметром в функцию
// Перебираем сначала конкретный объект, когда напишите функцию для объекта user2, можно будет ее оптимизировать
// под разные объекты


const user2 = {
    name: 'Hacker',
    userTechnologies: {
        frameworks: {
            react: 'this is library',
            vue: 'i like this frame',
            angular: 'maybe sometime',
            libraries: {
                axios: 5,
                lodash: 4,
                pnotify: 3
            }
        }
    }
}

// console.log(getNestedName(user2, 'axios'))  // 5
// console.log(getNestedName(user2, 'lodash'))  // 4
// console.log(getNestedName(user2, 'pnotify')) // 3