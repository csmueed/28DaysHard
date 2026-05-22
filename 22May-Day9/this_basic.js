let user = {
  course: "Full Stack Development",
  price: 799,
  name: "Mueed",
  welcomeMessage: function () {
    return console.log(
      `Hello, Mr ${this.name}, you bought course of ${this.course} for just PKR ${this.price}`,
    );
  },
};
user.welcomeMessage();

user.name = "Ali Hasan";
user.welcomeMessage();