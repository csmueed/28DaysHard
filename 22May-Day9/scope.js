if (true) {
  const name = "Mueed";
  console.log("Mueed");
  if (true) {
    const uni = "VU BSCS";
    console.log(`${name} , ${uni}`);
  }
  // console.log(uni);
}

//**************/

function userGreet() {
  const username = "Mueed";
  console.log(username);
  function userSec() {
    return console.log(`Welcome, Mr. ${username}`);
  }
  userSec();
}
userGreet();

//..........................


addOne(5);

function addOne (num) {
    return console.log(num + 1);
};


const AddTwo = function (num) {
    return console.log(num + 2);
}

AddTwo(7);