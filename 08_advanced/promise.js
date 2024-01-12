// const promiseOne = new Promise(function(resolve,reject){
//     //do a async task
//     //db calls,network calls
//     setTimeout(function(){
//         console.log("Async tsk is complete");
//         resolve()
//     },1000);
// })
// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     },1000)
// },1000).then(function(){
//     console.log("async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chaicode@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)

// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "anuja" , password:"123"})
            
//         }
//         else{
//             reject('ERROR :Something went wrong')
//         }
//     },1000)
// })
// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then(() => {
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log("promise either resolved or rejected");
// })


// const promise5 = new Promise((resolve,reject)=>{

//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "javascript" , password:"123"})
            
//         }
//         else{
//             reject('ERROR : JS went wrong')
//         }
//     },1000)
// });

// async function consumePromise5(){
//     try{
//     const response = await promise5;
//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromise5();


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//    }catch(err){
//     console.log("E",err);
//    }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
