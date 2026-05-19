const myCities = ["lahore", "karachi", "islamabad", "quetta", "peshawar", "skardu", "muzafrabad"];
const myProvinces = ["punjab", "sindh", "balochistan", "pakhtoonkhwa", "gilgit-baltistan", "azad kashmir"];
const random = [24, false, null]
// myCities.push(myProvinces);
// console.log(myCities);

const myConcat = myCities.concat(myProvinces);
// console.log(myConcat);

const mySpread = [...myCities, ...myProvinces, ...random];
// console.log(mySpread);

let complexArray = [1,2,3,[4,5,[6,7,[8,9,[0,1,],["Mueed"]]]]];
// let openArray = complexArray.flat(Infinity);
// console.log(openArray);

// console.log(Array.isArray(false));
// console.log(Array.isArray([false]));

// console.log(Array.from("Mueed"));
// console.log(Array.from({ City: "Lahore", }));

let score1 = 100;
let score2 = 300;
let score3 = 840;
console.log(Array.of(score1, score2, score3));









