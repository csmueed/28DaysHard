function sayMyName(name) {
  return `Hello, Mr ${name}`;
}
console.log(sayMyName("Mueed"));

function addition (val1, val2) {
    return console.log(val1 + val2);
}
addition(34,55);

function greetingMessage (user = "Guest") {
    return console.log((`${user} Just LoggedIN!`));
}
greetingMessage("Mueed");