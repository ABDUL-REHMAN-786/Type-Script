/*
QUESTION # 13

Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

*/

// Store examples of different modes of transportation in an array
const transportationModes: string[] = 
["Tesla Model S", "Honda motorcycle", "Boeing 747", "Bicycle"];

// Print statements about each mode of transportation
console.log("Statements about different modes of transportation:");

// Statement about the first mode of transportation
console.log(`I would like to own a ${transportationModes[0]}.`); 

// Statement about the second mode of transportation
console.log(`I dream of riding a ${transportationModes[1]}.`); 

// Statement about the third mode of transportation
console.log(`I wish to travel in a ${transportationModes[2]}.`); 

// Statement about the fourth mode of transportation
console.log(`I enjoy riding my ${transportationModes[3]}.`); 



const myTransport = ["car", "bike", "bus", "train", "aeroplan"]

//method (loop)

for(let i = 0; i < myTransport.length; i++){
   console.log(`i would like to own a ${myTransport[i]}`);
}
