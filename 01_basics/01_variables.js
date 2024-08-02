const accountId = 123123
let accountEmail = "arti@gmail.com"
var accountPassword = "12345"

acountCity = "Ahmedabad"

// accountId = 23456
console.log(accountId)

accountEmail = "abc@ac.com"
accountPassword = "ab123"
acountCity = "Pune"

let accountState;
/*
Not use var because issue of build scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, acountCity, accountState])