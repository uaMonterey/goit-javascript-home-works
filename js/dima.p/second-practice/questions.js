// Разница между __proto__ и prototype.
// И ещё раз разобрать на примерах колбеки и привязку контекста this.

// Ответ
// __proto__ - это фактический объект, который используется в цепочке поиска 
// для решения методов и т.д. prototype - это объект, который используется для 
// сборки __proto__ при создании объекта с помощью new:

// свойства с нижним подчеркиванием
// Когда Вы видите, что переменная или метод имеют префикс "_", знайте, 
// что здесь нет никакой скрытой магии вуду. Это просто соглашение об именовании, которое напоминает разработчику о том, 
// что переменная (свойство) или метод являются либо private, либо protected, и к ним нельзя получить доступ из-за пределов класса.
// Изменил нижнее подчеркивание просто на букву A для наглядности. Все работает так же)

class Car {

    static getSpecs ( car ) {
        console.log( `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price} ` )
    }

    constructor ( { price, maxSpeed } ) {
        this.speed = 0;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    get price () {
        return this._price;
    }

    set price ( priceValue ) {
        this._price = priceValue;
    }

    turnOn () {
        this.isOn = true;
    }

    turnOff () {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate ( accelerateValue ) {
        if( this.speed + accelerateValue <= this.maxSpeed ) {
            this.speed = this.speed + accelerateValue;
        }
    }

    decelerate ( decelerateValue ) {
        if( this.speed - decelerateValue >= 0 ) {
            this.speed = this.speed - decelerateValue;
        }
    }

    drive ( hoursInMove ) {
        if( this.isOn ) {
            this.distance = hoursInMove * this.speed;
        }
    }
}

const mustang = new Car( { maxSpeed: 200, price: 2000 } );

mustang.turnOn();
mustang.accelerate( 50 );
mustang.drive( 2 );

Car.getSpecs( mustang );
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate( 20 );
mustang.drive( 1 );
mustang.turnOff();

Car.getSpecs( mustang );
// maxSpeed: 200, speed: 30, isOn: false, distance: 30, price: 2000

console.log( mustang.price ); // 2000
mustang.price = 4000;
console.log( mustang.price ); // 4000


// Зачем нужны статические методы

// К примеру есть такой класс "Человечество". У человечества есть характеристика "средний рост", 
// она не применима к отдельному человеку. Метод рассчитывающий средний рост и саму переменную которая 
// его хранит нужно сделать статической.
// Экземпляром класса "Человечество", является отдельный человек. Отдельный человек может иметь свой конкретный рост, 
// вес, цвет волос и так далее, он может ходить, есть, разговаривать - вот эти методы и переменные должны быть динамическими.