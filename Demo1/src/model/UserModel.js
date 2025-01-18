const mongoose = require("mongoose");

const UsrSchema = new mongoose.Schema({
    //structure of the document(schema)
    name:{
        type:String,
        require:true,
        default:"xyz",
    },
    email:{
        type:String,
        require:true,    //if you not pass email then validation error will come so mandetory to add email for this condition.
        unique:true,
    },
    password:{
        type:"string",
        required:true,
    },
    status:Boolean,
    phone:Number
});

//create templete
//create model
const userModel  = mongoose.model("user",UsrSchema);

module.exports = userModel