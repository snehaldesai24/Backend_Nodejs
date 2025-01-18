const fs =require("fs");

function createFolder(res){
    fs.mkdir("./Nodejs", (error)=>{
        if(error){
            res.end("<h2 style='color:red'>Failed to create</h2>")
            
        }else{
            res.end("<h2 style='color:green'>Successfully created folder</h2>")
        }
        });
}

function deleteFolder(res){
    fs.rmdir("./Nodejs", (error)=>{
        if(error){
            res.end("<h2 style='color:red'>Failed to Delete Folder</h2>")
            
        }else{
            res.end("<h2 style='color:green'>Successfully Deleted folder</h2>")
        }
        });
}

module.exports = { createFolder, deleteFolder };