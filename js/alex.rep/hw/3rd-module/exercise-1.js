// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const updateData = function(data) {

  data.mood = 'happy'
  data.hobby = 'skydiving'
  data.premium = false

  const newArr = Object.keys(data)
  // console.log(newArr);
  for (const key of newArr){
    
    console.log(`${key} : ${data[key]}`);
  }
  
 return 
}

// console.log(updateData(user));
console.table(updateData(user));