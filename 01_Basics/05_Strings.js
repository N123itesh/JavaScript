const name = "Nitesh "
const repocount = 10
///old method ====>
console.log(name + repocount);
//// new and easy to read ====>
console.log(`My name is ${name} and I have ${repocount} repos`);
// method to introduce string;
const gameName = new String("Nitesh-hc-com")


//Strings Methods


console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Nitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

//Strings to array

console.log(gameName.split("-"));













