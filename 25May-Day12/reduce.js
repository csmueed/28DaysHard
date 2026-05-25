let myArr = [1, 2, 3, 4, 5];
let finalArr = myArr.reduce((acc, curval) => {
  return acc + curval;
}, 0);
console.log(finalArr);

const cart = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 9000 },
    { name: "Motherboard", price: 18000 },
    { name: "RAM", price: 4000 },
    { name: "SSD", price: 8000 },
];

const totalPrice = cart.reduce((acc,currval)=>{
    return acc + currval.price;
},0);
console.log(totalPrice);


