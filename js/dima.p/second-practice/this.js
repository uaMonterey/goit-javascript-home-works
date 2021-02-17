// Контекст, привязка контекста, методы объектов

const cat = {
    name: 'Tom',
    age: 3,
    hasTail: true,
    sayMiay() {
        return 'Miay-Miay'
    },
    getHumanAge: function() {
        return this.age * 6
    },
    tellAge: function() {
        return `My age is ${this.age}`
    }
}

// console.log(cat)

// const arrayFn = () => {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     return a*b*c
// }

// arrayFn(2, 5, 7)

const func = function(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    a*b*c
}

// func(10, 3, 2)

// console.dir(func)

// Методы для привязки контекста 

// bind

const user = {
    name: 'Tanya',
    age: 25,
    surname: 'Ivanova',
}

const user2 = {
    name: 'Katya',
    age: 22,
    surname: 'Petrova',
}

function getInfo() {
    return `Name: ${this.name} ${this.surname}. Age: ${this.age}`
}

// setTimeout(() => {
//     console.log(getInfo.bind(user)())
// }, 2000);

// setTimeout(() => {
//     console.log(getInfo.bind(user2)())
// }, 3000);

// call

// console.log(getInfo.call(user2))

// apply тоже самое что и call, только аргументы принимает в виде массива .apply(context, [arg1, arg2, ...])

// console.log(getInfo.apply(user2))