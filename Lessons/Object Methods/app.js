// const person = {
//   name: 'Jesnie',
//   age: 20,
//   location: ['Philippines', 'Bulacan'],
//   greet: function () {
//     return `Hello my Name is ${person.name} I am ${person.age} Years Old. I live in ${person.location[0]} Specifically in ${person.location[1]}`;
//   },
// };

// console.log(person.greet());

function greet() {
  return `Hello my Name is ${person.name} I am ${person.age} Years Old. I live in ${person.location[0]} Specifically in ${person.location[1]}`;
}

const person = {
  name: 'Jesnie',
  age: 20,
  location: ['Philippines', 'Bulacan'],
  greet,
};

console.log(person.greet());
