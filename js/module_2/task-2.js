/* 
* Проверка пароля (ранний возврат)

* Задание 

* Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

*1 Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

*2 удали переменную message;
*3 удали else;
*4 код должен работать так же, как и до оптимизации.
 
*5 Тесты

* Объявлена функция checkPassword(password).
* Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
* Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
* Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.
*/


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  
  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  } 

  return 'Доступ запрещен, неверный пароль!';
}
console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

