/* Exercises
1. Create an object that has your firstName, lastName, and occupation as keys.
2 .Access each value from your object using both dot notation and bracket notation.
3. Add a key for hobby to your object. Remove the key and value for occupation.
4. What is the difference between dot notation and bracket notation?*/

// 1.
let infoAboutMyself = {
    firstName : "Enia",
    lastName : "Munteanu",
    occupation : "artist"
};

// 2.
let myFirstName = infoAboutMyself.firstName;
let myFirstNameRepeated = infoAboutMyself["firstName"];
console.log(myFirstName);
console.log(myFirstNameRepeated);

let mySecondName = infoAboutMyself.lastName;
let mySecondNameRepeated = infoAboutMyself["lastName"];
console.log(mySecondName);
console.log(mySecondNameRepeated);

let myOccupation = infoAboutMyself.occupation;
let myOccupationRepeated = infoAboutMyself.occupation;
console.log(myOccupation);
console.log(myOccupationRepeated);

// 3.
infoAboutMyself.hobby = "drawing";
console.table(infoAboutMyself);

delete infoAboutMyself.occupation;
console.log(infoAboutMyself);

// 4.
/* We use the BRACKET notation when you need to evaluate some expression or pass in a variable to get the name of the KEY
But when you DON'T KNOW the name of the KEY and it is NOT a variable or expression --> we use the DOT notation */
//Example:
let obj = {};
let person = "Enia";
obj[person] = "This is a person";
obj[1+1+1] = "Three";
console.log(obj); 
/*{ '3': 'Three',
 Enia: 'This is a person' }*/
 console.log(obj[3]); //Three
 console.log(obj[person]); //"This is a person"
 console.log(obj["Enia"]); //idem
 console.log(obj.person); //undefined