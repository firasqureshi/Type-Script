"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
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
console.log("-".repeat(20) + "Line End" + "-".repeat(30));
