/*
 * Рекурсия
*/

let i = 0 

const fact = () => {
  if (i >= 5) {
    return
  } 
  console.log(i);

  i++

  fact( )
}

fact()