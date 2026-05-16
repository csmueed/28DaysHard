let myName = "mueed";

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(4));
console.log(myName.at(-5));
console.log(myName.charCodeAt(0));
console.log(myName.codePointAt(0));

let myDetails = "My City is Lahore";

console.log(myDetails.includes('Lahore'));

let myUrl = "http://www.x.com/csmueed";
console.log(myUrl.startsWith("https"));

let myImage = "Picture.png";
console.log(myImage.endsWith(".png"));

console.log(myName.indexOf("m"));
console.log(myName.lastIndexOf("e"));

let language = "JavaScript";
let slicedLang = (language.slice(0,4));
console.log(language);
console.log(slicedLang);

let myGreet = "Hello, Mueed";
let anotherGreet = (myGreet.replace("Mueed", "Ali"));
console.log(myGreet);
console.log(anotherGreet);

let newUrl = "https://www.cs%20mueed%website%20pak.com"
let editedUrl = newUrl.replaceAll("%20", "-")
console.log(newUrl);
console.log(editedUrl);

let spacedtext = "   Name   "
console.log(spacedtext);
console.log(spacedtext.trim());

let myID = "12345";
console.log(myID.padStart(11, "793"));
console.log(myID.padEnd(15, "*"));

console.log(myID.repeat("5"));

let fruits = "orange, banana, mango";
let newFruits = (fruits.split(","));
console.log(newFruits.at(1));

let myNum = 4343;
let convertedNum = myNum.toString;
console.log(typeof convertedNum);
console.log(typeof String);

console.log(convertedNum.valueof());

























