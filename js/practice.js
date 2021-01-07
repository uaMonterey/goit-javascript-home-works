const family = ['Sergii', 'Ryan', 'Maryna'];

// console.log(family);
// console.log(family[0]);
// console.log(family[1]);
// console.log(family[2]);
// console.log(family.length);


// family[0] = 'Maksymenko Sergii'
// console.log(family[0]);
// family[1] = 'Maksymenko Ryan'
// console.log(family[1]);
// family[2] = 'Sharuda Maryna'
// console.log(family[2]);

// family[3] = 'i love my family'
// console.log(family);

/*  
         * Итерация по массиву
*/
// for (let i = 0; i < family.length; i += 1) {
//   console.log(`My family consist of: ${family[i]}`);
// }

/*  
         * Заполнение данных с помощью цыкла
*/
// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`)
// }

// console.log(`numbers: ${numbers}`);


// 6.1. Цикл for...of

// for (const member of family) {
//   console.log(member);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// 6.2. Инструкции break и continue
 
// const clients = ['Krew', 'Monterey', 'SilverWings']
// const clientNameToFind =  'Monterey';        // prompt('Введите имя клиента');
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) { 
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

 /* message = 'Клиента с таким именем нету в базе данных!'; */

// }

// console.log(message);


// const numbers = [1, 2, 3, 4];  
// const numberToFind = 13;
// let message;

// for (const number of numbers) {
//      if (number === numberToFind) {
//         message = 'number is finded'; 
//         break;    
//      }
//      message = 'number is not finded';
// }
// console.log(message);



// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i +=1) {
//     if (numbers[i] < threshold) {
//       continue;
//     }
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }

// function makeArray(firstArray, secondArray, maxLength) {
  
// const allArray = firstArray.concat(secondArray);
// console.log(allArray); 
// }
// console.log(makeArray(['1', '2', '3', '4', '5', '6'], ['7', '8', '9', '10'], 8));

// firstArray = ['1', '2', '3', '4', '5', '6'];
// secondArray = ['7', '8', '9', '10'];
// maxLength = 8;
// const allArray = firstArray.concat(secondArray);
// console.log(allArray);


// function includes(array, value) {
//   // Пиши код ниже этой строки
   
//     if array.includes(value) ? return true :  return false;
     
//      }
     
   
//   // Пиши код выше этой строки
// console.log(icludes([1,2,3,4,5], 3));