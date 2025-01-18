const http = require("http");
const fs = require("fs");

var server = http.createServer((request,response)=>{
    //console.log("recevied");
        if(request.url === "/"){
            fs.readFile("./public/Home.html","utf-8",(error,data)=>{
                if(error){
                    response.sendDate("Something Wrong")
                }else{
                    response.end(data);
                }
            });

        }else if(request.url === "/products"){
            fs.readFile("./public/products.html","utf-8",(error,data)=>{
                if(error){
                    response.sendDate("Something Wrong")
                }else{
                    response.end(data);
                }
            });

        }else if(request.url === "/profile"){
            fs.readFile("./public/profile.html","utf-8",(error,data)=>{
                if(error){
                    response.sendDate("Something Wrong")
                }else{
                    response.end(data);
                }
            });
        }
    });

server.listen(5656, ()=>{
    console.log("Server Started");
});