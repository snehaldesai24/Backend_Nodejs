const http = require("http");
const fsObjs = require("./fs.js");

const server = http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Set the Content-Type header
    //res.writeHead(200, { "Content-Type": "text/html" }); 
    
    console.log(req.url);
    if(req.url === "/create"){
       fsObjs.createFolder(res);
    }else if(req.url === "/delete"){
       fsObjs.deleteFolder(res);
    }else{
        res.end("<h2>Invalid Request</h2>");
    }  
});

server.listen(4646,()=>{
    console.log("Server Started..")
})
