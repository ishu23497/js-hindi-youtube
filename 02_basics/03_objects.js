//singleton

// object literals

const JsUser = {
    name: "ishu",
    "full name":"ishu rajput",
    age: 18,
    location: "agra",
    email: "ajjubhai@google.com",
    IsLoggedIn: false,
    lastLoggedIn:["monday","sunday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"])



JsUser.email = "ishu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mansingh@google.com"

console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting());
