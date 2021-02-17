// в js есть 7 примитивных типов данных и объекты
// Объекты же используются для хранения коллекций различных 
// значений и более сложных сущностей. В JavaScript 
// объекты используются очень часто, это одна из основ языка. 
// Поэтому мы должны понять их, прежде чем углубляться куда-либо ещё.


// Создание объекта

const someObj = new Object();
const createObj = Object.create({}) // создает прототип для объекта createObj
const obj = {}; // такое объявление называют литералом объекта

// console.log(createObj)
// console.log(someObj);
// console.log(obj);

// При использовании литерального синтаксиса {} мы сразу можем поместить в объект несколько свойств в виде пар «ключ: значение»

// свойство или поле объекта это ключ со значением

const car = {
    model: 'bmw',
    maxSpeed: 250,
    isActive: true,
    'wheels On My Car': 'vossen',
}

// console.log(car['wheels On My Car'])

// console.log(car);

// car['some key'] = "red";

// console.log(car);

delete car.isActive;

// console.log(car);

// newCar.model = 'Mercedes-benz';

// console.log(car);

// console.log(car['wheels on my car'])

// квадратные скобки так же используются для получения исчисляемого значения

// const res23 = prompt('Enter key', 'model');

// если записывать через точку, будет ошибка

// alert(car[res23]) 

// =====================================================

// Пример с передачей примитивного типа данных в функцию

// function changeValue(value) {
//     value = value * 2;
//     console.log('value = ', value);
// }

// let num = 20;

// console.log('variable before function call: ', num);
// changeValue(num);
// console.log('variable after function call: ', num);

// function changeValue(value) {
//     value.num = value.num * 2;
//     console.log('value = ', value.num);
// }

// const objValue = {num: 25}

// console.log('variable before function call: ', objValue.num);
// changeValue(objValue);
// console.log('variable after function call: ', objValue.num);

// Клонирование объекта
// Производительность. Про spread тяжело сказать, потому что его в спецификации нет
// но если сравнивать клонирование объекта через Object.assign и через JSON.parse(JSON.stringify(obj)) то клонирование через assign
// намного быстрее, чекал тесты на каком-то ресурсе

const user = {
    name: 'John',
    age: 30,
    surname: 'Smith',
    newField: {
        name: 'some name',
        obj: {
            obj1: 'dsfs'
        }
    }
}

// const newUser = Object.assign({},user);
// const newUser = {...user};
// const newUser = JSON.parse(JSON.stringify(user));

// console.log(newUser)

// JSON.stringify(obj) - Метод преобразует значение JavaScript в строку JSON, value - значение, преобразуемое в строку JSON.
// JSON.parse(text) - разбирает строку JSON, возвращает объект Object, соответствующий переданной строке JSON text.

user.field = 'new field'

// console.log("new user: ", newUser)
// console.log("user: ", user)

// функции и объекты

// const getNewObject = (color, width, height) => {
//     return {
//         color,
//         width,
//         height,
//     }
// }

// console.log(getNewObject('red', '200px', '200px'))

// Ограничения на имена свойств в объектах

const variebleNames = {
    let: 'let variable',
    const: 'const variable',
    function: 'some fn'
}

// console.log(variebleNames['let'])  

// Итерация по объекту, оператор in

// const inObj = {
//     car: 'BMW',
//     name: 'Bob',
//     age: 30
// }

// const res = 'car' in inObj;
// const res2 = 'boat' in inObj;

// console.log(res, res2)

const iterationObj = {
    firstIt: "some string",
    secondIt: 123,
    thirdIt: true,
    fourthIt: ['one', 'two', 'three']
}

// Методы для работы с объектами

// console.log(iterationObj.hasOwnProperty('secondIt'))
// console.log(Object.keys(iterationObj))
// console.log(Object.values(iterationObj))
// console.log(Object.entries(iterationObj))
// console.log(Object.getOwnPropertyNames(iterationObj))

const arr = [1, 2, 3, 3, 5, 7, 8, 11, 13]
console.log(arr.filter((el,i)=>{
    console.log(i)
    return i%2!==0
})) //[2, 3, 7, 11]
console.log(arr.filter((el)=> {
    console.log(arr.indexOf(el))
    return arr.indexOf(el)%2!==0
}))// [2, 7, 11]