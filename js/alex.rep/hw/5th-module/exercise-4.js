/* Задание 4
Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value */

class StringBuilder {
  value;

  constructor(str) {
    this.value = str;
  }

  get value() {
    return this.value;
  }

  append(str) {
    this.value = this.value + str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
