// Object litrel and Singleton.
mySymbol = Symbol("REACT");
const userOne = {
  username: "ali5348",
  email: "ali88@gmail.com",
  name: "Ali Hasan",
  country: "Pakistan",
  password: "353faff@44",
  isLoggedIn: false,
  "province code": 882,
  [mySymbol]: "JavaScript",
};

console.log(userOne);
console.log(userOne.email);
console.log(userOne["province code"]);
console.log(typeof userOne[mySymbol]);

userOne.country = "Germany";
console.log(userOne);
// Object.freeze(userOne);
userOne.email = "abc@example.com";
console.log(userOne);

userOne.greeting = function(){
    return (`Welcome, Mr. ${this.name}`);
}
console.log(userOne.greeting());



