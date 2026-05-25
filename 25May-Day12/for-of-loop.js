const myCity = ["Islamabad", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala"];
for (const element of myCity) {
    console.log(`The Liveable City of Pakistan is ${element}`); 
};

const myMap = new Map();
myMap.set ("Lahore", "Punjab");
myMap.set ("Karachi", "Sindh");
myMap.set ("Quetta", "Balochistan");

for (const [element, value] of myMap) {
    console.log(`${element} is the city in ${value} Province.`);  
}

