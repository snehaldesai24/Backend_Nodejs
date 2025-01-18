//using writeFile function => Asynchronus
//using writeFileSync function => synchronus

const fs = require("fs");

//Asynchronus
// fs.writeFile("./readme.txt","This is my first data","utf-8",(error)=>{
//     if(error){
//         console.log("Error while creating file");
//         console.log(error);
//     }else{
//         console.log("File Created");
//     }
// });

//synchronous
var res = fs.writeFileSync("./React.txt","This is my React file");
console.log("file is created");