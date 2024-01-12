const URL = 'https://api.github.com/users/anujabhise';


//using async , await
// const getInfo = async () =>{
//     let response = await fetch(URL);
//     // console.log(response); //response in json format
//     console.log(response.status); //200 :successful
//     let data = await response.json();
//     console.log(data);
// }
// getInfo()


//using promise chaining
function getInfo(){
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });
}
getInfo()