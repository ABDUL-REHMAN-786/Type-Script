/* QUESTION # 03

Name Cases:

Store a person’s name in a variable,
and then print that person’s name in
lowercase, uppercase, and titlecase*/
// Store the person's name in a variable
let personName = "abdul rehman";
// Print the person's name in lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Print the person's name in uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Print the person's name in titlecase
console.log("Titlecase: " + personName.replace(/\b\w/g, (char) => char.toUpperCase()));
export {};
