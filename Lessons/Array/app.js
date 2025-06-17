// Array with loops

let arr = new Array(50);

arr[0] = 5;
arr[1] = 10;
arr[2] = 15;
arr[3] = 20;
arr[4] = 25;
arr[5] = 30;
arr[6] = 35;
arr[7] = 40;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let names = ['cess', ['ate kambal', 'tita'], 'yeri', 'jesnie'];

console.log(names[1][1]);

// Array and object

let info = {
  name: 'jesnie',
  age: 20,
  crush: 'cess',
  location: ['bulacan', 'hagonoy'],
};

console.log(info.location[0]);
