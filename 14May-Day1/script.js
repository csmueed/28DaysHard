const accountId = 98546;
let accountEmail = "me@google.com"
var accountPassword = "pak123"
accountCity = "Lahore"
let accountProvince;

// accountId = 2 // not allowed


accountEmail = "new@hc.com"
accountPassword = "21212121"
accountCity = "Karachi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountProvince])


const username = "xyz853";
let email = "example@email.com"
let phone = 92301345644;
let password = "pakistan786"

console.log(username);
console.table([username, email, phone, password]);
email = "not@email.com"
console.table([username, email, phone, password]);
