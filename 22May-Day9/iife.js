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

const result = (function () {
  return console.log("Hello, World!");
})();

console.log(result);
