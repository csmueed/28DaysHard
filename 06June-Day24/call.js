function validateEmail (email) {
    return email.trim().toLowerCase();
}
function user (name, email){
    this.name = name;
    this.email = validateEmail(email);
}
const userOne = new user ("csmueed", "CSMUEED@GMAil.cOM   ");
console.log(userOne);

function greet () {
    console.log(`Hello, Mr. ${this.person}`)
}
const myUser = {
    person: "Mueed"
}
greet.call(myUser);