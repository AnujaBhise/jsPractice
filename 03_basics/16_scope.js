let a =89
var c =400
if (true){
    let a =10
    const b =20
    var c =30
    // console.log("inner A:",a)
}



// console.log(a)
//  console.log(b)
// console.log(c)

function one(){
    const username="anuja"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

// if (true ){
//     const username ="anuja"
//     if(username === "anuja"){
//         const website = "youtube"
//         //console.log(username+website)
//     }
//     //console.log(website);
// }
// //console.log(username)

//++++++interesting hoisting ++++++++

// console.log(addone(5))
// function addone(num){
//     return num+1

// }

// addTwo(5)
// const addTwo = function (num){
//     return num+2
// }