let myDate = new Date ();
console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(typeof myDate);

let createdDate = new Date ("05-18-2026");
let createdDateTwo = new Date ("2026-05-18");
console.log(createdDate.toString());
console.log(createdDateTwo);

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000));

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());
console.log(myDate.getDate());








