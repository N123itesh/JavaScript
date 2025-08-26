const accountId=144553
let accountEmail="nitesh@gmail.com"
var accountPassward="12345"
accountCity="Jaipur"
let accountState;

//accountId= 2  // not allowed

accountEmail="hc@hc.com"
accountPassward="2121221"
accountCity="Bhopal"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail,accountPassward,accountCity,accountState])
