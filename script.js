function getAreaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  let area = getAreaOfCircle(5);
  console.log(area);
  
  function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  let circumference = getCircumferenceOfCircle(5);
  console.log(circumference);
  
  function getAreaOfSquare(side) {
    return side * side;
  }
  
  let length = getAreaOfSquare(5);
  console.log(length);
  
  function getAreaOfTriangle(base, height) {
    return (1 / 2) * base * height;
  }
  
  let reigon = getAreaOfTriangle(2, 5);
  console.log(reigon);