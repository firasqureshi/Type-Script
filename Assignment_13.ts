// our Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

export{};

// Method 1

let trans = ["motorcycle" , "car" , "bus" , "bicycle"];
// OR like below
// let trans = [];
// trans.push("motorcycle");
// trans.push("car");
// trans.push("bicycle");
// trans.push("bus");

// console.log(trans);

let brand = ["Honda" , "Toyota" ,"BMX" , "Volvo"];

for (let i=0 ; i<3 ; i++){
    console.log("I would like to own a " + brand[i] + " " + trans[i] + ".")
};

console.log("-".repeat(20) + "Line End" + "-".repeat(30));
//Method 2

let ttrans : Array<[brands: string, tran_mode: string]> = [];

ttrans.push(["Honda" , "motorcycle"]);
ttrans.push(["Toota" , "car"]);
ttrans.push(["BMX" , "bicycle"]);
ttrans.push(["Volvo" , "bus"]);

ttrans.forEach(([tran_mode, brands]) =>
{
console.log(`I would like own a ${tran_mode} ${brands}`)

}
)




