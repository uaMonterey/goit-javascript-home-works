// Поиск самого длинного слова

// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.



function findLongestWord(string) {
    string = string.split(' ');
    let longest = 0;
    let word;
    
    for (i = 0; i < string.length; i += 1) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

            
            // ВАРИАНТ №2

            // function findLongestWord(string) {
//     newArray = string.split(' ');
//     let longestWord = ' ';

//     for (i = 0; i < newArray.length; i += 1) {
//         if (newArray[i].length > longestWord.length) {

//             longestWord = newArray[i];
//         }
//     }
//     return longestWord;
//  }