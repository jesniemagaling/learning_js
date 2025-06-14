function circleArea(radius) {
  return Math.PI * radius * radius;
}

function squareArea(side) {
  return side * side;
}

function triangleArea(side) {
  return (Math.sqrt(3) / 4) * side * side;
}

function calculateArea(callback, value) {
  console.log(callback(value));
}

calculateArea(circleArea, 5);

// es6 arrow function
setTimeout(() => {
  console.log('Hello');
  setTimeout(() => {
    console.log('Hey');
    setTimeout(() => {
      console.log('Namaste');
      setTimeout(() => {
        console.log('Hi!');
        setTimeout(() => {
          console.log('Bonjour!');
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

// variadic function
function person(firstName, lastName, ...hobbies) {
  console.log('First Name: ', firstName);
  console.log('Last Name: ', lastName);
  console.log('Hobbies: ', hobbies);
}

person('Jesnie', 'Magaling', 'Movies', 'Hiking', 'Running');

// function with conditions
let password;

function passwordChecker(ps) {
  if (ps === 8) {
    return `Strong Password!`;
  } else {
    return `Password should be 8 characters`;
  }
}

const result = passwordChecker(7);
console.log(result);

//function ternary operator
let pass;

function passwordChecker(ps) {
  return ps === 8 ? `Strong Password` : `Password should be 8 characters.`;
}

const res = passwordChecker(8);
console.log(res);

// function with filter method
const age = [32, 33, 16, 40];

const checkAdults = (age) => {
  return age >= 18;
};

console.log(age.filter(checkAdults));

// function with filter method another example
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

console.log(words.filter((word) => word.length > 6));

let products = [
  { name: 'Checkers', category: 'Toys' },
  { name: 'Harry Potter', category: 'Books' },
  { name: 'Iphone', category: 'Electronics' },
  { name: 'Learn PHP', category: 'Books' },
];

const product = products.filter((product) => product.category === 'Books');
console.log(product);
