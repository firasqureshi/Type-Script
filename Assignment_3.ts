/* Assignement 3: Name Cases: Store a person name in a variable, and then print that person s name in lowercase, uppercase, and titlecase.*/

export{}
// First way - Upper case and lower case
let personName1 = "jahanZaib taYYab kAmran ali";

    // Upper Case
    console.log(personName1.toUpperCase());

    // Lower Case
    console.log(personName1.toLowerCase());

// Second way - Upper case and lower case

    // Upper Case
    let UpperName :string = personName1.toUpperCase();
    console.log(UpperName);

    // Lower Case
    let LowerName :string = personName1.toLowerCase();
    console.log(LowerName);


// Title Case

// split the name and store in an arrayBuffer.
let tname: string[] = personName1.split(" ");
console.log(tname);

// Run for loop on all words one by one and assign first letter upper and rest lower case
let titlecase :string = "";

 for (let i=0 ; i < tname.length ; i++){
     titlecase +=tname[i].charAt(0).toUpperCase() + tname[i].slice(1).toLowerCase() + " "
 };

 console.log(titlecase);

