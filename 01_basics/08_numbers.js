const score = 400

const balance = new Number (100)
// console.log(balance);
// console.log(score);

// console.log(balance.toString());

// console.log(balance.toString().length);
// console.log(balance.toFixed(4));//add 4 precison values

const otherNum =23.895678

// console.log(otherNum.toPrecision(5))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//#####  MATH_LIBRARY    #######//

console.log(Math);
console.log(Math.abs(-5)); //converts negative valur to positive
console.log(Math.round(4.3)); 
console.log(Math.ceil(4.3)); 
console.log(Math.floor(4.3)); 
console.log(Math.max(2,3,5,7));
console.log(Math.min(2,3,5,7));
console.log(Math.random());//random values between 0 to 1
console.log((Math.random()*10)+1);//+1 will avoid values like 0.01 or 0.02

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min ) 