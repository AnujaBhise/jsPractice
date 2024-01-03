const coding = ['js','ruby','python','c++','java']

// const values = coding.forEach((item) => {
//     console.log(item)
// })

// console.log(values)

// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter((num)=> {
//     return num >  4
// })
// // 
// const newNums = []
// myNum.forEach((num)=>{
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// MAPS 
// const myNumbers = [1,2,3,4,5,6]
// const newNUms = myNumbers.map((num)=> num+10)
// console.log(newNUms);

// const newNums = myNumbers
//                     .map((num) => num * 10)
//                     .map((num) => num + 1)
//                     .filter((num) => num >=40)

// console.log(newNums)
// 

// REDUCE()


const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(accumulator,currentValue){
//     console.log(`Acc: ${accumulator} CurrentValue : ${currentValue}`)
//     return accumulator + currentValue
// } , 0)

const myTotal = myNums.reduce ((acc,curValue) => acc+curValue , 0)


console.log(myTotal)

const shoppingcart= [
    {itemName : "js course", price : 299},
    {itemName : "py course", price : 999},
    {itemName : "mobile course", price : 999},
    {itemName : "data science course", price : 1299},
    {itemName : "java course", price : 199},
]

const Price =  shoppingcart.reduce( (acc , item) => acc + item.price,0)
console.log(Price)