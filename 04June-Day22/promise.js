const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise Completed");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("First Promise is Resolved");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2nd Promise Consumed!");
    resolve();
  }, 1500);
}).then(() => {
  console.log("2nd Promise is Resolved!");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third Promise Consumed...");
    resolve({ username: "csmueed", email: "csmueed@gmail.com" });
  }, 500);
});
promiseThree.then((myUser) => {
  console.log(myUser);
  console.log(myUser.username);
  console.log(myUser.email);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error == false) {
      console.log("4th Done Promise");
      resolve({
        id: 145,
        password: "33443",
      });
    } else {
      console.log("Error 1122");
      reject({
        id: "000",
        password: "000",
      });
    }
  }, 4000);
});

promiseFour
  .then((value) => {
    console.log(value);
    return value.id;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((notVal) => {
    console.log(notVal);
  })
  .finally(() => console.log("Promise is either resolved or rejected."));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error == false) {
      console.log("5th Done Promise");
      resolve({
        id: "mueed",
        password: "mueed2",
      });
    } else {
      console.log("Error 1122");
      reject({
        id: "notmueed",
        password: "notmueed2",
      });
    }
  }, 100);
});

async function consumePromiseFive() {
  try {
    const myData = await promiseFive;
    console.log(myData);
    console.log("Done");
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
}
consumePromiseFive();

async function getMyData() {
  try {
    const myData = await fetch("https://api.github.com/users/csmueed");
    const Data = await myData.json();
    console.log(Data);
    console.log(Data.login);
  } catch (error) {
    console.log(`New: ${error}`);
  }
}
getMyData();

fetch("https://api.github.com/users/csmueed")
  .then((responce) => responce.json())
  .then((user) => user.bio)
  .then((bio) => console.log(bio))
  .catch((error) => console.log(error))
  .finally(() => console.log("100% task completed finally"));
