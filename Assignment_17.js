"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Ali", "Ahmed", "Arif"];
console.log(guest_list);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guest_list[i] + " you are invited to dinner on sunday night at 8:00 pm.");
}
;
//guest who cannot make it
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
let guestcantmakeit = "Ahmed";
console.log(`Guest ${guestcantmakeit} cannot make it the dinner.`);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
//remove the guest from the list and add new guest
let new_guest = "Majid";
let indexnotmakeit = guest_list.indexOf(guestcantmakeit);
//console.log(indexnotmakeit);
if (indexnotmakeit !== -1) {
    guest_list[indexnotmakeit] = new_guest;
}
console.log("Second list of inviation");
console.log(guest_list);
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guest_list[i] + " you are invited to dinner on sunday night at 8:00 pm.");
}
;
//inform guest that we have got bigger table
for (let i = 0; i < 3; i++) {
    console.log("Dear " + guest_list[i] + " this is to inform you that we have got a biiger table. ");
}
;
//Add new guest in the beginning of the list
guest_list.unshift("Tahir");
//console.log(guest_list);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
//Add new guest in the middle of the list
guest_list.splice(2, 0, "Tariq");
//console.log(guest_list);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
//Use append() to add one new guest to the end of your list
guest_list.push("Zamil");
console.log(guest_list);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
for (let i = 0; i < 6; i++) {
    console.log("Dear " + guest_list[i] + " this is to inform you that we have got a biiger table. ");
}
;
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can invite only two persons because the table is not available.");
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
for (let i = 6; i > 2; i--) {
    guest_list.pop(i);
}
;
console.log(guest_list);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < 2; i++) {
    console.log("Dear " + guest_list[i] + " this is to inform you that we have got a biiger table. ");
}
;
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i < 2; i++) {
    guest_list.pop(i);
}
;
console.log("My guest list is " + guest_list);
console.log(" ".repeat(55) + "Line Break" + " ".repeat(20));
console.log("-".repeat(20) + "Line End" + "-".repeat(30));
