// Immediately Invoked Function Expression.

(function check() {
  return console.log("DataBase Connected!");
})();

(function () {
  return console.log("Second DataBase Connected!");
})();

(() => {
  return console.log("Printed Successfuly");
})();
