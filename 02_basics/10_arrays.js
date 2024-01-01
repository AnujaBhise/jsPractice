    //arrays can store hetrogenous data
//arrays are resizable...array elementd cannot be accessied by arbitary elements
const   myArr = [0,1,2,3,4,5,true,"Anuja"]
// console.log(myArr[0])
//arrays whenever copied are shallow copies

const Heros = ["Shaktiman","powerRangers"]
const myArr2 = new Array (1,2,3,4,5)
// console.log(myArr2[1]);

//arr methods
// myArr.push(56)
// myArr.push(23)
// myArr.pop()

// myArr.unshift(40)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))


const newArr3 = myArr.join()
// console.log(myArr);
// console.log(newArr3);
// console.log(typeof newArr3);

//slice, splice
console.log("a",myArr);
const mynew1 = myArr.slice(1,3)
console.log(mynew1)
console.log("b",myArr)

const mynew2 = myArr.splice(1,3)

console.log("c",myArr)
console.log(mynew2)
