//unlink, unlinkSync
//remove dirctory use rmdir

const fs = require("fs");

// fs.unlink("./user.java", (error)=>{
//     if(error){
//         console.log("Failed to Remove the file");
//     }else{
//         console.log("Successfuly Remove file");
//     }
// });

//how to add the content in existing file => fs.appendFile()

// fs.appendFile("./index.html","\n<p>this is para</p>",(error)=>{
//     if(error){
//         console.log("Error while Append the content");
//     }else{
//         console.log("Append content Successfuly");
//     }

// });

//information about file

fs.stat("./index.html",(error, info)=>{
    if(error){
        console.log("error");
    }else{
        console.log(info);
    }
});