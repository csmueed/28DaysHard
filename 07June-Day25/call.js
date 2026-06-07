

// function introduce(city, skill) {
//   console.log(`${this.name} is from ${city} and learns ${skill}`);
// }

// const user = {
//   name: "Mueed"
// };

// introduce.call(user, "Bhakkar", "JavaScript");

// function sayName () {
//   console.log(`Hello, Your Name is ${this.name}`)
// }
// const user = {
//   name: "Mueed",
// }
// sayName.call(user)


// function userDetails (degree, uni) {
//   console.log(`Hello, Your Name is ${this.name}, Your Degree is ${degree} and Your University is ${uni}`)
// }
// const One = {
//   name: "Mueed",
// }

// userDetails.call(One, "BSCS", "Virtual University")

function setName(name) {
  this.name = name;
}

const user = {};

setName.call(user, "Mueed");

console.log(user);