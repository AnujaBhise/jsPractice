// let mypromise = new Promise((resolve,reject) =>{
//     console.log("i am a promise");
//     // resolve("promise successful")
//     //reject("some error occured");

// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         },2000)
//     })
// }
// let result = getData(123);
// console.log(result)
// //o/p
//Promise { <pending> }
//data 123

// const getPromise = () =>{
//     return new Promise((resolve,reject) =>{
//         console.log("i am a promise");
//         // resolve("promise successful")
//         reject("hello error")
        
// });
// }

// let promise = getPromise();
// promise.then((res)=>{
//     return console.log("my promise fulfilled",res)
// })

// promise.catch((err)=>{
//     return console.log("rejected",err)
// })

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1")
            resolve("success")
        },3000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2")
            resolve("success")
        },6000);
    });
}

// console.log("fetching data1...")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res)
// })
// console.log("fetching data2...")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res)
// })

//promises chaining
console.log("fetching data1...");
asyncFunc1().then((res)=>{
    console.log(res)
    console.log("fetching data2...")
    asyncFunc2().then((res)=>{
    console.log(res)
    });
})