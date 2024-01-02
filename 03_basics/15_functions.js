function myName(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("J");
    console.log("A");
}

// myName this is function reference
function addTwoNumbers(num1,num2){
    return num1+num2
    console.log("anuja");
}
// const result = addTwoNumbers(2,6)
// console.log(result)

function loginUserMessage(username = "guest"){
    if (username === undefined){
        console.log("please enter  a username")
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage())

function calculateCartPrice1(...num1){
    return num1
 }
console.log(calculateCartPrice1(200,399,499))
function calculateCartPrice(var1, var2 ,...num1){
    return num1
}
console.log(calculateCartPrice(200,399,49,66,66,667))


const user = {
    username : "amit",
    price : 999
}

function handleObject(anyobject1){
    console.log(`username is ${anyobject1.username} and price is ${anyobject1.price}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    price:309
})

const myNewArray = [200,300,4005,500 ];
function returnSecondValue(getArrayanuja){
    return getArrayanuja[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([344,555,66,7,89,9]))
