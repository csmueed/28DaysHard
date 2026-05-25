let myArr = [10, 20, 30, 50, 70, 100, 120];
let filteredArr = myArr.filter((item, index, arra) => {
//   console.log(item, index, arra);
  return item <= 50;
});
console.log(filteredArr);


let studentsRecord = [
    {
        Name: "Ali",
        CGPA: 3.78,
    },
    {
        Name: "Hasan",
        CGPA: 3.50,
    },
    {
        Name: "Kashan",
        CGPA: 3.11,
    },
    {
        Name: "Wasif",
        CGPA: 2.50,
    },
    {
        Name: "Omar",
        CGPA: 4.0,
    },
];

let studentFiltered = studentsRecord.filter((item)=>{
    return item.CGPA >= 3.30;
});
console.log(studentFiltered);


let fruits = ["banana", "mango", "apple", "falsa", "pineapple", "avacado"];
let finalFruits = fruits.filter((item)=>{
    return item.length <= 6;
});
console.log(finalFruits);

let myNums = [1,2,3,4,5,6,7,8,9,10];
let oddNums = myNums.filter((item)=>{
    return item % 2 !== 0;
});
console.log(oddNums);

