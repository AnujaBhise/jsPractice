// console.log("one");
// console.log("two");

//     function hello(){
//         console.log("hello")
//     }
//     setTimeout(hello,2000);
// console.log("three");
// console.log("four");

//three , four doesnt wait for 2 seconds for hello function .function hello  runs parallely along with execution of three ,four 

//callbacks
// function sum(a,b){
//     console.log(a+b)
// }

// function calculator (a,b,sumCallback){
//     sumCallback(a,b)
// }
// calculator(1,2,sum);

//callback hells
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

//callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4 );
//         });
//     });
// });


// promises is a solution to callback hells 
function getData(dataId,getNextData){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data",dataId);
                resolve("success")
                if(getNextData){
                    getNextData();
                }
            },3000)
        })
    }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })

getData(1)
.then((res)=>{
     return getData(2)
    })
.then((res)=>{
     return getData(3)
    })
.then((res)=>{
        console.log(res);
    })