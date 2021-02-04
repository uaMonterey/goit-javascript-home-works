//функция конструктора
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

//свойсто prototype функции конструктор
Hero.prototype.changeName = function (name) {
  this.name = name;
};

//создание экземпляра класса Hero
const mango = new Hero('Mango', 1000);

console.log(mango);
