const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoosedb")
.then(()=>{
    console.log("Connect with Database Successfully")

}).catch(()=>{
    console.log("Failed to connect with Database")
})