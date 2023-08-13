"use strict";
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, 
// print a message to them. 
// The text of each message should be the same, 
// but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let fr_name = ["Ali", "Ahmed", "Asif", "Muneer", "Akram"];
let fr_mess_start = "I just want to clarify that ";
let fr_mess_end = " is one of my best friends.";
// by calling each array element with its index in console.log separately.
console.log(fr_mess_start + fr_name[0] + fr_mess_end);
console.log(fr_mess_start + fr_name[1] + fr_mess_end);
console.log(fr_mess_start + fr_name[2] + fr_mess_end);
console.log(fr_mess_start + fr_name[3] + fr_mess_end);
console.log(fr_mess_start + fr_name[4] + fr_mess_end);
console.log("-".repeat(20) + "Line End" + "-".repeat(30));
// By using For loop
for (let i = 0; i < 5; i++) {
    console.log(fr_mess_start + fr_name[i] + fr_mess_end);
}
;
