let myNum = 567;
let anotherNum = new Number (453);
console.log(myNum);
console.log(anotherNum);
console.log(typeof myNum);
console.log(typeof anotherNum);

let thisNum = "123";
let convertedNum = Number(thisNum);
console.log(typeof thisNum);
console.log(typeof convertedNum);

let firstInt = "123abc";
let secondInt = "abc123"
console.log(parseInt(firstInt));
console.log(parseInt(secondInt));

let firstFloat = "123.45abc"
let secondFloat = "abc987.65"
console.log(parseFloat(firstFloat));
console.log(parseFloat(secondFloat));

let priceCart = 34000.464545433;
console.log(priceCart.toFixed(4));
console.log(Math.round(priceCart));
console.log(Math.floor(priceCart));
console.log(Math.ceil(priceCart));

let myRandom = Math.random();
console.log(myRandom);

let min = 10;
let max = 20;
let formula = Math.floor(((Math.random())* (max - min) + 1) + min);
console.log(formula);

let unaryyy = "5"
let conUna = +unaryyy;
console.log(typeof conUna);
console.log(typeof unaryyy);








