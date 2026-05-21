function sayMyName(name) {
  return `Hello, Mr ${name}`;
}
console.log(sayMyName("Mueed"));

function addition(val1, val2) {
  return console.log(val1 + val2);
}
addition(34, 55);

function greetingMessage(user = "Guest") {
  return console.log(`${user} Just LoggedIN!`);
}
greetingMessage("Mueed");

function calculateCartPrices(...num) {
  return console.log(num);
}
let myPrices = calculateCartPrices(488, 33, 560, 1080);

const course = {
  name: "Web Development",
  instructor: "Hitesh Ch",
  price: "PKR 2999",
};

function printGreetingMessage(Greets) {
  return console.log(
    `Hello, Welcome to the ${Greets.name} Course by ${Greets.instructor} in Just Offer of ${Greets.price}.`);
};
printGreetingMessage(course);

const course2 = {
    name: "Data Structure & Algorithms",
    instructor: "Akshay Saini",
    price: "PKR 8999"
};
printGreetingMessage(course2);

const myArray = [10, 20, 30, 50];

function returntheSecondValue (Arr) {
    return console.log(`The Second Value of this Array is ${Arr[1]}`);
};

returntheSecondValue(myArray);
