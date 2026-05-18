const myArray = ["JavaScript", "Python", "Rust", true, 786, null, undefined, "Mueed"];
console.log(myArray);
console.log(myArray[2]);

const myPush = myArray.push("Ruby");
console.log(myArray);

const myPop = myArray.pop();
console.log(myPop);
console.log(myArray);

const myUnishift = myArray.unshift("TypeScript");
// console.log(myUnishift);
console.log(myArray);

const myShift = myArray.shift();
console.log(myShift);
console.log(myArray);

console.log(myArray.includes("JavaScript"));
console.log(myArray.indexOf("JavaScript"));


const EU = ["Germany", "Sweden", "Netherlands", "France"];
let euSlice = EU.slice(0,2);
console.log(euSlice);
console.log(EU);

let euSplice = EU.splice(1,3);
console.log(euSplice);
console.log(EU);









