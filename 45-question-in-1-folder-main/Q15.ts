/*
QUESTION # 15

Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


// Declare an array named guestList of type string[], containing a list of guest names
let guesstList: string[] = ["Hamza", "Usman", "Ayesha", "Areeba"];

// Retrieve the second guest from the guestList array and assign it to the variable "cantMakeIt"
let cantMakeIt = guesstList[1];

// Output a message indicating that the second guest can't make it to dinner
console.log(cantMakeIt, "can't make it to dinner.");

// Replace the first element of the guestList array with the name "Ali"
guesstList.splice(0, 1, "Ali");

// Iterate over each element of the guestList array using the forEach method
// For each guest in the array, log an invitation message to the console using string interpolation
guesstList.forEach(guest =>{
    console.log(`Assalam 0 Alaikum Dear ${guest}, I would like to invite you to dinner with me`)
});