//Primitive Data Type: String, Boolean, BigInt, Null, Undefined, Number, Symbol.
// Primitive are the stack memory means we get copy of the orignal value not the orignal value.
let user = "Mueed";
let anotherUser = user;
anotherUser = "Malik";
console.log(user);
console.log(anotherUser);

//Non Primitive Data Type: Objects, Functions and Arrays.
let thisUser = {
  email: "malik@abc.com",
  password: 2555335,
};
let twoUser = thisUser;
twoUser.email = "malik@xyz.pk";
console.log(thisUser);
