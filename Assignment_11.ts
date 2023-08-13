// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

export{};

let fr_name = ["Ali" , "Ahmed" , "Asif" , "Muneer" , "Akram"];

// by calling each array element with its index in console.log separately.

console.log(fr_name[0]);
console.log(fr_name[1]);
console.log(fr_name[2]);
console.log(fr_name[3]);
console.log(fr_name[4]);

console.log("-".repeat(50));

// By using For loop
for (let i = 0 ; i < 5 ; i++){
    console.log(fr_name[i])
};