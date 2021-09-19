//Arrow Function
const add = (num1, num2) => num1 + num2;


const sum = add(22, 90);
//console.log(sum);
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 20, 5);
//console.log(result);
const tenTimes = (number) => number * 10;
const result1 = tenTimes(17);
//console.log(result1);
const fiveTimes = num => num * 5;
const result2 = fiveTimes(10);
//console.log(result2);

//Multi work er kattra : 
// Maltiple er katra obossoi return korta hoba 
const doMath = (x, y) => {
  const sum = x + y;
  const dif = x - y;
  const result1 = sum * dif;
  const output = result1 * sum;
  return output;
}
const total = doMath(10, 20);
console.log(total);