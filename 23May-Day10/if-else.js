// let balance = 24000;
// if (balance < 15000) {
//   return console.log(
//     `You are not eligible for this offer, because your balance is ${balance} pkr.`,
//   );
// } else {
//   return console.log(
//     `Congrats, you are eligible for this offer because your balance is ${balance} pkr.`,
//   );
// };

//ATM System if else mini project.

// let accountBalance = 24000;
// let widthrawalAmount = 5000;
// let isCardValid = true;
// let enteredPIN = 1122;
// let correctPIN = 1122;
// let dailyLimit = 10000;
// let atmCashAvailable = 50000;

// if(isCardValid == false) {
//     return console.log("Card Declined");
// }
// else if(enteredPIN !== correctPIN){
//     return console.log("Wrong PIN, Please Enter Correct PIN.")
// }
// else if(widthrawalAmount <= 0){
//     return console.log("Please Enter a Valid Amount.")
// }
// else if(widthrawalAmount>dailyLimit){
//     return console.log("Daily Limit Reached");
// }
// else if(widthrawalAmount>accountBalance){
//     return console.log("Insuffiencent Balance!");
// }
// else if(widthrawalAmount>atmCashAvailable){
//     return console.log("ATM out of cash");
// }
// else if(widthrawalAmount === accountBalance){
//     return console.log("Account will be empty");
// }
// else{
//     return console.log("Transaction successful.");
// };



let students = 1;
let grades = "A";
let remarks = "pass";

if(students >= 3 && grades === "A"){
    return console.log("One")
}
else if (students >=3 || grades === "A"){
    return console.log("Two");
}