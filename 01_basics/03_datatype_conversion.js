let score  = "39"
let score2 = "234a"
let score3 = null
let score4 = undefined
let score5 = "Anuja" 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber  = Number (score2)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let valueInNumber2  = Number (score3)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

let valueInNumber3 = Number (score4)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)
let valueInNumber4 = Number (score5)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)
// "33" => 33
// "33abc" => NaN
//false=>0, true =>1


let isLoggedIn =1 
let booleanIsLoggedIn =  Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

let emptyString = ""
let empStr = Boolean (emptyString)
console.log( empStr)

let myname = "Anuja"
let name1 = Boolean( myname)
console.log(name1)

//1 => true
//0 => false
//empty string => false
//"anuja" => true

let someNum = 33
let strNumber = String (someNum)
console.log(strNumber )
console.log(typeof strNumber)