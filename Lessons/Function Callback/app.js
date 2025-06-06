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
