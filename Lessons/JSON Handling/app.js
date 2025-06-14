// const colors = ['red', 'yellow', 'blue', 'green', 'orange'];

// const [color1, color2, color3, ...restColors] = colors;

// console.log(color1, color2, color3);
// console.log(restColors);

// const array1 = ['a', 'b', 'c'];

// for (arrays of array1) {
//   console.log(arrays);
// }

// const words = ['Hello', 'bird', 'table', 'Football'];

// const capWords = words.forEach((word, i, arr) => {
//   arr[i] = word[0].toUpperCase() + word.substring(1);
// });

// console.log(words);
// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map((num) => num * 10);
// console.log(double);

// const number = [1, 2, 3, 4, 5];
// function myFunction(num) {
//   return num * 10;
// }
// const newArr = number.map(myFunction);
// console.log(newArr);

let products = [
  { name: 'Checkers', category: 'Toys' },
  { name: 'Harry Potter', category: 'Books' },
  { name: 'Iphone', category: 'Electronics' },
  { name: 'Learn PHP', category: 'Books' },
];

const product = products.filter((product) => product.category === 'Books');
console.log(product);
