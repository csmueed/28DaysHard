const clock = document.querySelector("#clock");
setInterval((e) => {
    let date = new Date();
    clock.textContent = date.toLocaleTimeString();
}, 1000);