"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
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
console.log("-".repeat(20) + "Line End" + "-".repeat(30));
