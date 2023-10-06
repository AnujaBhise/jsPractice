const name = "anuja"
const repoCount = 50

console.log( name +" has "+ repoCount + " repositories")

// STRING INTERPOLATION 
// use ``
console.log(`Hello  my name is ${name} and my repo count is ${repoCount}`)

const fruits = new String('mango')

console.log(fruits[0]);
console.log(fruits.__proto__);
console.log(fruits.length);
console.log(fruits.toUpperCase());
console.log(fruits.charAt(2))
console.log(fruits.indexOf('o'))

const newFruits = fruits.substring(0,4)
console.log(newFruits)
//substring does not accept negative values

const anotherFruit = fruits.slice(-5,3)
console.log(anotherFruit)

const newString = "    sentence    has      many whitespaces"
console.log(newString)
console.log(newString.trim());

const url = "https://anuja%20bhise@gmail.com"
console.log(url.replace('%20','-'))
console.log(url.includes('amazing'))

const portfolio = "anuja-bhise-portfolio-website"
console.log(portfolio.split('-'))//returns array