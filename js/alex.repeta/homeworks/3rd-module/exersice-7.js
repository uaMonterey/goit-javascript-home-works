// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 100,

  // История транзакций
  transactions: [
  {amount: 1500, type: "deposit", id: 983923578999119},
  {amount: 500, type: "withdraw", id: 6076859780222245},
  {amount: 250, type: "withdraw", id: 957646671992184},
  {amount: 150, type: "deposit", id: 5579797502472479},
  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transId = {}
   
    transId.amount = amount
    console.log(amount)

    transId.type = type
    console.log(type)

    transId.id = Math.random() * 10**17
    console.log(transId.id)
    
    return transId
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
    return this.balance += amount
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
    amount > this.balance
           ? `Cнятие такой суммы не возможно, недостаточно средств.`
           : this.balance = this.balance - amount
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
  
    return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction
        }          
    }
     return `${id} такой транзакции не найдено!!!`
  },
  
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0
    for (const transaction of this.transactions) {
        console.log(transaction)
      if (transaction.type === type) {
         total += transaction.amount
      }      
  }
  return total
  },
};




// console.log(account.createTransaction(100, Transaction.DEPOSIT));
// console.log(account.createTransaction(1300, Transaction.DEPOSIT));
// console.log(account.createTransaction(1500, Transaction.DEPOSIT));
// console.log(account.createTransaction(1800, Transaction.WITHDRAW));
// console.log(account.createTransaction(1700, Transaction.DEPOSIT));
// console.log(account.createTransaction(1500, Transaction.WITHDRAW));
// console.log(account.createTransaction(1500, Transaction.WITHDRAW));


// console.log(account.deposit(1500));

// console.log(account.withdraw(500))
// console.log(account.withdraw(250))

// console.log(account.deposit(150));

// console.log(account.transactions);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(957646671992184));


// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
