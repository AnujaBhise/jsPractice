const user = {
    username:"Anuja",
    price:999,
    welcomemsg:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this);
    }
 }
// user.welcomemsg()
// user.username  = "sam"
// user.welcomemsg()
// console.log(this)

function chai2(){
    let username="anuja"
    console.log(this)
}
// chai2()

const chai = () => {
    let username="anuja"
    console.log(this)
}

chai()

// const add = (num1,num2) =>{
//     return num1+num2
// }
// console.log(add(5,6))


// const add =(num1,num2) => num1+num2

const add =(num1,num2) => (num1+num2)
console.log(add(5,6))

// const name =() => {username:"anuja"}
// console.log(name())