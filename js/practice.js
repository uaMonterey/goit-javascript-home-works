// function nbYear(p0, percent, aug, p) {
//   // your code
//   let accumPopInOneYear = p0 * (percent / 100) + aug;

//   console.log(accumPopInOneYear);
// }

// console.log(nbYear(1500, 5, 100, 5000), 15);
// console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
// console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

/* p0 1500 - начало года

percent 5 % или 0.05 процент популяции в год

aug  100 - сколько приезжает или уезжает жителей в год

p 5000 - сколько лет нужно что бы население было равно 5000
 */

// console.log(1500 + 1500 * 0.05 + 100);
// console.log(15 * 175);

function longest(s1, s2) {
  // your code
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const arr3 = arr1.concat(arr2);

  // for (let el of arr1) {
  //   arr2.includes(el) ? arr3.push(el) : `arr3.push(notettt)`;
  // }

  return arr3;
}

console.log(longest('aretheyhere', 'yestheyarehere'));

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
