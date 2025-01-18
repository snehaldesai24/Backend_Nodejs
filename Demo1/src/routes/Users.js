const express = require("express");
const jwt = require("jsonwebtoken");
//const userModel = require("../model/userModel");
//const secretkey ="fkjefcjnfverjknvekrjnvejknbvjkb";

const User = require("../model/userModel");
const authMiddleware = require("../middleware/Auth")
const route =express.Router();
//const connection = require("../utils/MongodbConnect");

// route.post("/newuser",async(req,res)=>{
//   var newUser = req.body;
//   console.log(newUser);
//   // var newUser ={
//   //   name:"S1",
//   //   status:true,
//   //   email:"S1@gmail.com",
//   //   phone:9868832400
//   // };
//  const newuser = new User(newUser);
//      await newuser.save();
//       res.send("Inserted User");

// }); //http://localhost:8989/users/newuser

// route.get("/login",async(req,res)=>{
//   var userdata = req.body
//   const user = await User.find(userdata);
//   // console.log(user);
//   // res.json({
//   //   ok:true,
//   //   token:"-------",
//   // });
//   if(user.length > 0){
//     //generate token
//     const token = jwt.sign(userdata,secretkey);
//     res.json({
//       ok:true,
//       result:token,
//     });
//   }else{
//     res.json({
//       ok:false,
//       result:"User doent Exist"
//     })
//   }
// }); //http://localhost:8989/users/login


// route.get("/getallusers", async (req, res) => {
//   //check the token verify
//   //console.log(req.headers["authorization"].slice(7));
  
//   var token = req.headers["authorization"].slice(7);
//   //const result = jwt.verify(token,secretkey)
//   jwt.verify(token,secretkey,async(error)=>{
//     if(error){
//       res.json({
//         ok:false,
//         result:"Invalid Token",
//       });
//     }else{
//       const users = await userModel.find({});
//       if(users.length >0){
//         res.json({
//           ok:true,
//           result:users,
//         })
//       }else{
//         res.json({
//           ok:false,
//           result:"Failed to fetch the data",
//         });
//       }
//     }
//   });
  
// }); 

//using middleware
route.get("/getallusers",authMiddleware, async (req, res) => {
  const users = await User.find({});
      if(users.length >0){
        res.json({
           ok:true,
          result:users,
        })
       }else{
         res.json({
           ok:false,
           result:"Failed to fetch the data",
         });
       }
     });

//http://localhost:8989/users/getallusers

route.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete({ _id: id });
    res.json({
      ok: true,
      result: "User Removed Successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: "Failed to Remove User",
    });
  }
}); //http://localhost:8989/users/delete/<id>

route.put("/update/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndUpdate({ _id: id }, req.body);
    res.json({
      ok: true,
      result: "User Updated",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});
//http://localhost:8989/users/update/<id>

route.get("/getusers", async (req, res) => {}); //http://localhost:8989/users/getuser

route.get("/get", (req, res) => {}); //http://localhost:8989/users/dummy


// route.get("/getuser",async(req,res)=>{
//     const collection = await connection("users")
//     var users = await collection.find({}).toArray();
//     res.send({
//         ok:true,
//         status:200,
//         results:users,
//     });
// });------//http://localhost:8989/users/getuser

//multiple routes are called using next if you are not pass next() then multiple routes are not working.
// route.get("/dummy",
//     (req,res,next)=>{
//         console.log("Route 1");
//         next();
//     },()=>{

//     },
//     (req,res)=>{
//         console.log("Route 2");
//     res.send({
//         ok:true,
//         result:"Working",
//     });
// }
// );http://localhost:8989/users/dummy

// route.get(
//     "/dummy",
//     (req, res, next) => {
//       var name = "xyz";
//       if (name === "xyz") {
//         console.log("middleware 1");
//         next();
//       } else {
//         res.send({
//           ok: false,
//           result: "Invalid User",
//         });
//       }
//     }, //middleware
//     (req, res, next) => {
//       console.log("middleware 2");
//       next();
//     },
//     (req, res) => {
//       console.log("route handler triggered");
//       res.send({
//         ok: true,
//         result: "API is Working",
//       });
//     } //route handler
//   ); //http://localhost:8989/users/dummy
  
module.exports = route;

//between route handler and between path what ever functions was called all those called middleware