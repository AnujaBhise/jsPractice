// primitive datatypes are stored in Stack memory
// whenver stack mem is used ,we get the copy of data

//non primitive datatypes are stored in heap mem
//whenever we use heap mem , we get the reference of original data.
//if changes made in refernce will also change value of original data.

let myYoutubeName = "animation.com"

let anotherName = myYoutubeName

console.log(myYoutubeName)
console.log(anotherName)

anotherName = "chaiaurcode"
console.log(myYoutubeName) //original value preserved
console.log(anotherName)//copy data changed
//this  data stored in stack

let user1 = {
    email:"user@google.com",
    upi : "user@upi"
}
let user2 = user1

user2.email = "anuja@gmail.com"
console.log(user1) //;original value changed
console.log(user2)//referenced value changed