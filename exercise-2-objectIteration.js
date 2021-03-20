//Looping over objects
//To iterate over objects we use FOR...IN loop
//Example
let instructor = {
    name : "Elena",
    programmer : true,
    dogOwner : false
};

for(let singleKey in instructor){
    console.log(instructor[singleKey]);
}

/*In the code example, singleKey is a variable that will be assigned to each key in the instructor object.
 To access the key's value, we must use the bracket notation. */

 //IF...IN -Determining if a key exists in an object
 let obj = {
     favoriteNumber : 33,
     favoriteColor : "blue"
 };

 if("favoriteNumber" in obj){
     console.log("The favoriteNumber key exists!");
 } //this will be logged

 if("nothing" in obj){
     console.log("The nothing key exists!");
 }

 //Exercises
 // 1. Given the following object below, write code to print the value then the key to the console separated by '=>' 
 let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
};

for(let key in namesAndHobbies){
    console.log(`${namesAndHobbies[key]} => ${key}`);
}

 // 2. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.
namesAndHobbies.enia = "dancing";
console.table(namesAndHobbies);

 // 3.Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

 if("enia" in namesAndHobbies){
     console.log("Enia", namesAndHobbies.enia);
 }
