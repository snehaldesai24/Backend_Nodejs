const fs = require("fs");  //importing our fs module

//using mkdir we can create directory

//fs.mkdir("./HTML", (error)=>{
// fs.mkdir("./CSS", (error)=>{
//     if(error){
//         console.log("Failed to create folder");
//     }
//     else{
//         console.log("Sucessfully created folder");
//     }

// })

//Remove folder using rmdir
// fs.rmdir("./CSS", (error)=>{
//     if(error){
//         console.log("Failed to remove folder");
//     }
//     else{
//         console.log("Sucessfully Removed folder");
//     }

// });

//readFile

fs.readFile("./React.txt", "utf-8", (error, content)=>{
    if(error){
        console.log("Error while accessing the content");
    }else{
        console.log(content)
    }
});
