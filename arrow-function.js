function add(num1, num2) {
  return num1 + num2;

  const add1 = function (num1, num2) {
    return num1 + num2;
  }
  //Arrow function
  const add4 = (num1, num2) => num1 + num2;

}
//Anonimus function
const sum = add(10, 20);
const sum1 = add1(10, 20);
const sum4 = add4(20, 30);


console.log(sum, sum1, sum4);