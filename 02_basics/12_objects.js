

//contructor method
//singleton
// Object.create()

const mySym = Symbol("key1")

//usning object literals
const jsUser = {
    name:"Anuja",
    age:23,
    [mySym]:"myKey1",
    location:"mumbai",
    isLoggedIn:false,
    lastLoginDays:["monday","daturfay"]
};

// console.log(jsUser.age)
// console.log(jsUser["age"])
// console.log(jsUser.mySym)
console.log(jsUser[mySym]);
console.log(typeof(jsUser[mySym]))

jsUser.location = "pune";
Object.freeze(jsUser.location)
jsUser.location="banglore";
console.log(jsUser)
//now object location cannot change


jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    //string interpolation
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());