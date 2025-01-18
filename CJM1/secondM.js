//call firstM.js 


// var obj = require("./firstM.js");
// console.log(obj.username);
// obj.f1();

//using destructure
// const {f1, username} = require("./firstM.js");
// f1();
// console.log(username);

//using array
const [f1, username] = require("./firstM.js");

console.log(username);
f1();