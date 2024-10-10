/*
QUESTION # 11

Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/

// Store the names of friends in an array called names
const fname: string[] = ["Alice", "Bob", "Charlie", "David"];

// Print each person's name by accessing each element in the list, one at a time
console.log("My friends' names are:");

console.log(fname[0]); // Print the first name
console.log(fname[1]); // Print the second name
console.log(fname[2]); // Print the third name
console.log(fname[3]); // Print the fourth name



// Declare an array named "names" containing a list of names
let names = ["Hamza", "Usman", "Ayesha", "Areeba"];

// Iterate over each element of the names array using the forEach method
// For each name in the array, log it to the console
names.forEach(name => console.log(name));
