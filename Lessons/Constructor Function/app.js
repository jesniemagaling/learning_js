// function person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.info = function () {
//     return `My name is ${this.name} I'm ${this.age} years old, my gender is ${this.gender}`;
//   };
// }

// const name1 = new person('Jesnie Magaling', 18, 'Male');
// const res = name1.info();
// console.log(res);

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    return `Starting the ${this.make} ${this.model}.`;
  };
  this.stop = function () {
    return `Stopping the ${this.make} ${this.model}.`;
  };
}

const car1 = new Car('Toyota', 'Camry', 2010, 'Silver');
const car2 = new Car('Honda', 'CR-V', 2004, 'Green');
console.log(car1.start());
console.log(car2.stop());
