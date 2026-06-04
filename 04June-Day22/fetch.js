const box = document.querySelector(".box");
const click = document.querySelector(".click");

click.addEventListener("click", (e) => {
  const mueedData = fetch("https://api.github.com/users/csmueed");
  mueedData
    .then((responce) => responce.json())
    .then((data) => {
      return {
        id: data.id,
        login: data.login,
        followers: data.followers,
        name: data.name,
        location: data.location,
        url: data.url,
      };
    })
    .then((values) => {
      box.innerHTML = `<h1> ${values.name} </h1>
        <h2> ${values.location} </h2>
        <p> ${values.followers} </p>
        <p> ${values.login} </p>
        <p> ${values.url} </p>
        <p> ${values.id} </p>`;
      return console.log(values);
    })
    .catch((error) => console.log("error happen", error))
    .finally(() => console.log("Finally..."));
});
