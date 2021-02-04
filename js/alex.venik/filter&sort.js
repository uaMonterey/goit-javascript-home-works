const arr = [5, 1, 2, 10, 3, 4];
parabol = arr => {
  const odd = arr.filter(x => x % 2 === 0).sort((a, b) => b - a);
  // console.log(odd);
  const even = arr.filter(x => x % 2 !== 0).sort();
  // console.log(even);
  const result = even.concat(odd);
  return result; /* result */
};
parabol(arr); // [1, 3, 5 , 10, 4, 2]
console.log(parabol(arr));
