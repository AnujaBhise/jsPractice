//is js dynamically typed lang hai ya statically typed ?
//JS is dynamocally types lang .In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.
//ts is statically typed 

// types of  datatypes
// primitive and nonprimitive asa refrenced types

//primitives types: they are call by value,
// inka original data ka reference nahi diya jata .
// inki mem. mein stored copy ko diya jata hai aur changes original value mein nahi hoti 
// ,copy wale value mein hoti hai
 
//8 primitive values
// String ,NUmber(can be integer,float ,decinmal) ,Boolean ,Null ,undefined ,Symbol(used to make a value unique) ,BigInt(some very big values)

// eg . const score =100
// const scoreValue =100.3
// const isLogged =false
 const outsideTemp=null
//let userEmail ; == let userEmail = undefined;
//symbol used for unique 
const id =Symbol('123')
const anotherId =Symbol ('123') 

// console.log(id === anotherId)
// console.log(id == anotherId)
 
const bigIntNumber = 123432212323425436n
console.log(typeof bigIntNumber)
//n added in end for bigINt


//referenced data types (non primitive type)
//mem. mein inka refernced directly allocate kiya jata hai

//arrays ,objects , functions
//arrays 
const heros = ["shaktiman","doga","ironman"]
 
//objects 
let myObj =  {
    myName : "Anuja" ,
    myfavouriteColor : "white"
 }

 //functions
 const myFunction = function (){
    console.log("hello world");
 }

 console.log(typeof myFunction)
 console.log(typeof outsideTemp)
 console.log(typeof userEmail)
 console.log(typeof id)
 