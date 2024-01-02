//immediately invoked function expression

(function chai(){
    //named iife
    console.log("DB Connected")
})();
(
    ()=>{
        console.log("db connected 2")
    }
)();
(//iife with parameters
    (name)=>{
        console.log(`${name} connected`)
    }
)('anuja')


