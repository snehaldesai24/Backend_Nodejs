//how to create database using mongodb

const express = require("express");
const {MongoClient } = require("mongodb");

const app = express();
const port = 6565;

const url = "mongodb://localhost:27017"    //mongodb url fixed
const client = new MongoClient(url);
const dbName = "aitnode"   //pass database name =>aitnode
const collectionName = "users"

app.get("/getusers", async (req,res)=>{

    //node app is connecting with mongodb server
    await client.connect()

    //connect with database
    const db = client.db(dbName);

    //connect with collection
    const collection = db.collection(collectionName);

    //access the data from collection
    const usersData= await collection.find().toArray()

    res.json({
        ok:true,
        result:usersData,
    });

});

app.listen(6565,()=>{
    console.log("Node server started")
})