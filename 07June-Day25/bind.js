function Greeting(id){
    console.log(`Welcome to the Website Mr. ${this.name} and your ID is ${id}`)
    text.textContent = `Welcome to the Website Mr. ${this.name} and your ID is ${id}`;
}

const userOne = {
    name: "Mueed",
}

let greetOne = Greeting.bind(userOne, 123);

const button = document.querySelector("#btn");
const text = document.querySelector("#text");

button.addEventListener("click", (e)=>{
    greetOne()
})


