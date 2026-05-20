const twitterUser = {};
twitterUser.username = "csmueed";
twitterUser.email = "csmueed@gmail.com";
twitterUser.password = "553gabb34";
console.log(twitterUser);

const newUser = {
    userData: {
        userName: {
            userFullName: {
                firstName: "Abdul",
                lastName: "Mueed",
            }
        }
    }
}
console.log(newUser.userData.userName.userFullName.lastName);

const obj1 = {
    value: 78,
}
const obj2 = {
    figure: 748,
}
const obj3 = {
    data: 33,
}
// let obj4 = {obj1, obj2, obj3};
// console.log(obj4);

// let obj4 = Object.assign({}, obj1, obj3, obj2);
// console.log(obj4);

let obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4);

const myAppUsers = [
    {
        email: "abc@zy.co",
        password: "34343",
    },
    {
        email: "tz@zy.co",
        password: "3554343",
    },
    {
        email: "abrgc@zy.co",
        password: "343nn43",
    },
];
console.log(myAppUsers[1].email);

console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty("username"));










