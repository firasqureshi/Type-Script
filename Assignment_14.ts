// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.


export{};

//Method 1
let guest_list = ["Ali" , "Ahmed" , "Arif"];

for (let i = 0 ; i <3 ; i++){
    console.log("Dear " + guest_list[i] + " you are invited to dinner on sunday night at 8:00 pm.")

};

console.log("-".repeat(20) + "Line End" + "-".repeat(30));
//Method 2

let glist : Array<[guest_name: string]> = [];
glist.push(["Ali"]);
glist.push(["Ahmed"]);
glist.push(["Arif"]);

glist.forEach(([guest_name]) =>
    console.log(`Dear ${guest_name} : you are invited to dinner on sunday night at 8:00 pm.`)
);
