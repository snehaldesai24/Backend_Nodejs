const http = require("http");
const fs = require("fs");

//var server = http.createServer((req,res)=>{
    //res.end("Hello This is my first response");
    //res.end("<h1 style='color:red;'>Hello This is my first response</h1>");

var server = http.createServer((req,res)=>{
    fs.mkdir("./HTML",(error)=>{
        if(error){
            res.end("<h1 style='color:red;'>Failed to create folder</h1>");
        }
        else{
            res.end("<h1 style='color:red;'>Folder is created</h1>");
        }
    })
});

server.listen(4646,()=>{
    console.log("Server is started");
})

//http://localhost:4646