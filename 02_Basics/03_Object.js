
const mySym = Symbol("Key1")//// Declaration of Symbol

// Object==>
const JsUser = {
    name: "Nitesh",
    "Full Name": "Nitesh Kumar",
    [mySym] : "myKey1",
    age: 20,
    location: "Jaipur",
    email: "nitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "niteshkr@gmail.com"

// Object.freeze(JsUser)

// JsUser.email = "kumar@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



