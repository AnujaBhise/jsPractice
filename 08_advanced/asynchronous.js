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
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

//callback function
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4 );
        });
    });
});