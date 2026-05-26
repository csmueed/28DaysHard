const students = [
  {
    id: 1,
    name: "Mueed",
    age: 21,
    semester: 1,
    isFeePaid: true,
    attendance: 82,
    marks: {
      CS101: 78,
      MTH101: 65,
      PAK301: 88,
      PHY101: 59,
    },
  },
  {
    id: 2,
    name: "Ali",
    age: 20,
    semester: 1,
    isFeePaid: false,
    attendance: 61,
    marks: {
      CS101: 45,
      MTH101: 38,
      PAK301: 72,
      PHY101: 50,
    },
  },
  {
    id: 3,
    name: "Hasan",
    age: 20,
    semester: 3,
    isFeePaid: true,
    attendance: 72,
    marks: {
      CS101: 85,
      MTH101: 78,
      PAK301: 70,
      PHY101: 55,
    },
  },
  {
    id: 4,
    name: "Zaid",
    age: 19,
    semester: 2,
    isFeePaid: false,
    attendance: 77,
    marks: {
      CS101: 80,
      MTH101: 81,
      PAK301: 77,
      PHY101: 59,
    },
  },
  {
    id: 5,
    name: "Mohammad",
    age: 23,
    semester: 8,
    isFeePaid: true,
    attendance: 95,
    marks: {
      CS101: 85,
      MTH101: 73,
      PAK301: 71,
      PHY101: 80,
    },
  },
];

students.forEach((item) => {
  let feeCheck = item.isFeePaid == true ? "Fee Paid" : "Fee Due";
  console.log(`${item.name} --- Semester ${item.semester} --- ${feeCheck}`);
});

function calculateTotalMarks(item) {
  let total = Object.values(item.marks).reduce((acc, val) => {
    return acc + val;
  }, 0);
  return total;
}

students.map((item) => {
  let total = calculateTotalMarks(item);
  console.log(`${item.name} --- ${total}`);
});

function calculatePercentage(item) {
  let total = (calculateTotalMarks(item) / 400) * 100;
  return total.toFixed(2);
}

students.map((item) => {
  let percentage = calculatePercentage(item);
  return console.log(`${item.name} - ${percentage}%`);
});


