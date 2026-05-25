const Countries = ["Pakistan", "India", "Iran", "Bangladesh", "China"];
Countries.forEach((item) => {
  console.log(item);
});

const values = [100, 200, 300];
values.forEach((item) => {
  return console.log(item + 2);
});

const Books = ["Atomic Habits", "Deep Work", "Rich Dad Poor Dad"];
Books.forEach((item, index, Arr) => {
  console.log(item, index, Arr);
});

const studentRecord = [
  {
    Name: "Ali",
    Grade: "A+",
    Major: "CS",
  },
  {
    Name: "Hasan",
    Grade: "A",
    Major: "Medical",
  },
  {
    Name: "Umar",
    Grade: "C-",
    Major: "Commerce",
  },
];

studentRecord.forEach((item) => {
  // console.log(item);
  console.log(item.Grade);
});
