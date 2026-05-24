for (let i = 0; i <= 10; i++) {
  //  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  // console.log(i);
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    for (let k = 0; k <= 3; k++) {
      //   console.log(`Value of i is ${i}, j is ${j} and k is ${k}`);
    }
  }
}

for (let i = 10; i >= 0; i--) {
  // console.log(i);
}

for (let i = 0; i <= 50; i = i + 2) {
  // console.log(i);
}

for (let i = 0; i <= 50; i++) {
  if (i % 2 != 0) {
    //    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
  // console.log(i);
  // console.log(sum);
}

let factorial = 1;
for (let i = 1; i < 10; i++) {
  factorial = factorial * i;
  // console.log(i);
  // console.log(factorial);
}

let numbers = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    numbers = numbers + 1;
    // console.log(numbers);
  }
}

let num2 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    num2 = num2 + 1;
    // console.log(num2);
  }
}

let sumEven = 0;
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    sumEven = sumEven + 1;
    // console.log(sumEven);
  }
}

for (let i = 1; i <= 5; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += "*";
  }

  // console.log(line);
}

let line = "";
for (let i = 0; i <= 15; i++) {
  line = line + "*";
  // console.log(line);
}

for (let i = 1; i <= 5; i++) {
  let myStr = "";
  for (let j = 1; j <= i; j++) {
    myStr = myStr + i;
  }
  console.log(myStr);
}


