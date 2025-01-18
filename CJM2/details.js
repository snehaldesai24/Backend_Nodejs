//const user = require("./users.js");
const address = require("./address.js");


//
var userobj = require("./users.js");

console.log("details file executed");

console.log("User", userobj.user);

//console.log("User:", user);
console.log("Address:", address);

userobj.changeName();   //changed name with new name