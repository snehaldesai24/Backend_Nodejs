const express = require("express");
const port = 8989
const UserRoute = require("./routes/Users");
const ProductRoute = require("./routes/Products");
const AuthRoute = require("./routes/Auth");
require("./utils/Mongoose");

const app =express();
app.use(express.json());

app.use("/users", UserRoute);

app.use("/auth",AuthRoute);

app.use("/products", ProductRoute);

app.listen(port,()=>{
    console.log("Server ia Started")
});