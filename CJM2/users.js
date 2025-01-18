var user ={
    id:101,
    name:"siya",
    email:"siya12@gmail.com"
}

function changeName(){
    user.name = "sneha";
    console.log(user);
}

console.log("User file executed");

//module.exports=user;

module.exports= {user, changeName};

