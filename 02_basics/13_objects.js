// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "somename@gmail.com",
    fullname: {
        userfullname:{
            firstName :"anuja",
            lastName : "bhise"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstName)
console.log(regularUser['fullname']['userfullname']['firstName'])

const obj1 ={ 1:"a",2:"b"}
const obj2 ={ 3:"a",4:"b"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const obj4 ={...obj1,...obj2}
// console.log(obj4)

const users = [
    {
        id:1,
        email:'h@gmsail.com'
    }
,
    {
        id:2,
        email:'g@gmsail.com'
    }
]
// console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser));//object keys returned as array
console.log(Object.values(tinderUser));//object values returned as array
console.log(Object.entries(tinderUser));//object entries returned as array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//retuens true/false