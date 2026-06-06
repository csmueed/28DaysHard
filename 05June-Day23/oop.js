// function user(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
//   this.greeting = function () {
//     console.log(`Hello ${this.email} welcome as ${thisusername}`);
//   };
// }
// const userOne = new user("csmueed", "mueed@csmueed.com", "334ghd@");
// console.log(userOne);
// userOne.greeting();
function User(username) {
  this.username = username;

  return {
    username: "anonymous"
  };
}

const userOne = new User("mueed");

console.log(userOne);
