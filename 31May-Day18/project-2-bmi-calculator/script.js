const body = document.querySelector("body");
const results = document.querySelector("#results");
const button = document.querySelector("#myBtn");
const form = document.querySelector("#myForm");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const guide = document.querySelector("#guide");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const calculate = ((weight * 10000) / (height * height)).toFixed(2);
  results.style.backgroundColor = "green";
  results.style.padding = "10px";
  results.style.borderRadius = "5px";
  if (calculate < 18.6) {
    results.textContent = `${calculate} - Under Weight`;
  } else if (calculate < 24.99 && calculate > 18.6) {
    results.textContent = `${calculate} - Normal Range`;
  }
  if (calculate > 24.99) {
    results.textContent = `${calculate} - Over Weight`;
  }
  button.disabled = true;
});
height.addEventListener("input", (e) => {
  button.disabled = false;
  results.textContent = "";
});
weight.addEventListener("input", (e) => {
  button.disabled = false;
  results.textContent = "";
});
