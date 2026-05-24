let i = 10;
while (i <= 100) {
  console.log(i);
  i++;
}

while (i >= 1) {
  console.log(i);
  i--;
}

let j = 1;
let k = 1;

while (j <= 3) {
  while (k <= 5) {
    console.log(`${j} * ${k} = ${j * k}`);
    k++;
  }
  j++;
}
