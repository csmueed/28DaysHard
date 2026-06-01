const form = document.querySelector(".form");
const guessField = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
const randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
const result = document.querySelector("#result");
// console.log(randomNumber);
let guessRemain = 10;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const myValue = parseInt(guessField.value);
  if (myValue === randomNumber) {
    result.textContent = `Congrats, You Guess it right, the number was ${randomNumber}`;
    guessRemain = guessRemain - 1;
    lastResult.textContent = guessRemain;
    submit.disabled = true;
  } else if (myValue > randomNumber) {
    result.textContent = `Too High`;
    guessRemain = guessRemain - 1;
    lastResult.textContent = guessRemain;
  } else if (myValue < randomNumber) {
    result.textContent = `Too Low`;
    guessRemain = guessRemain - 1;
    lastResult.textContent = guessRemain;
  } else {
    result.textContent = `Please Write a Number`;
  }

  guesses.textContent += `${myValue}, `;
  //   guesses += myValue;
  //   console.log(`RN ${randomNumber}`);
  //   console.log(`guessRemain: ${guessRemain}`)
  if (guessRemain <= 0) {
    submit.disabled = true;
    result.textContent = `You availed all attempts, the random number was ${randomNumber}`;
  }
  // submit.disabled = true;
  //   console.log(myValue);
});
