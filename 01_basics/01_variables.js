const accountId = 111234
let accountEmail = "anuja@hotmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;
/*
 Prefer not to use var because of block scope issue
 */


// accountId = 2 //not allowed ,will not be executed
accountEmail = "anuja@hc.com"
accountPassword = "212121"
accountCity = "Pune"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])