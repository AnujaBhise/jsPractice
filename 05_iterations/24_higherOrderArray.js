//for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const number of arr) {
//     console.log(number);
// }

// const greeting = "hello world!"
// for (const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }

//maps 
const map = new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")

// console.log(map)

// for (const [key , value] of map) {
//     console.log(key)
//     console.log(value)
// }
//maps are iterable ,able to run forof

const myObj = {
    game1 : "nfs",
    game2 : "road rashes",
    game3 : "coc"
}

// for (const [key,value] of myObj){
//     console.log(key)
//     console.log(value)
// }
//for of loop doesnot run in objects 



// FOR IN 

const lang ={
    js:"javascrpit",
    cpp : "c++",
    rb:"ruby" }
// for (const key in lang) {
//     console.log(key)
// }
// for (const key in lang) {
//     console.log(lang[key]) //get values of keys
// }
// for (const key in lang) {
//     console.log(`${key} short form of  ${lang[key]}`);
// }

//for in also runs for ARRAYs
const pro = ["ruby","python","c++"]
for (const key in pro) {
    console.log(key);
}

//gives keys of array object...array ke keys bydeafult start form 0
for (const key in pro) {
    console.log(pro[key]);//values of arrays
}


// for (const key in map) {
// console.log(key);}
   
//no output given
//for in doesnt run for map
