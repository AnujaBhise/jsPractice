function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);

        },3000)
    });
}
async function getWeatherdata(){
    await api(); //1st call
    await api(); //2nd call
}
getWeatherdata()


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


// iife function used
(async function getAllData(){
    await getData(1)
    await getData(2)
    await getData(3)
})();

// getAllData();