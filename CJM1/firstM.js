function f1(){
    console.log("f1 is called");
}

var username = "Reshma Jain";

//module.exports =f1;

//using destructure
//module.exports = {f1, username};

//using array
module.exports = [f1, username];

