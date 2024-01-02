const coding = ['js','ruby','python','c++','java']
//calback function
// coding.forEach(  function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe())
// coding.forEach(printMe)//only give reference of function : '()' absence

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })


//ARRAY with object interview
const lang =[
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"java",
        file:"java"
    },
    {
        name:"python",
        file:"py"
    }
]
lang.forEach((item)=>{
    console.log(item.name);
})
