const express = require("express");
require("./config/database");
const connectDB = require("./config/database");
const User = require("./model/user");

const app = express();

app.post("/signup", async (req,res) => {
    const user = new User({
        userName : "Dipanshu",
        email : "dd@gmail.com"
    })

    try{
        await user.save();
        res.send("data is uploaded")
    }
    catch (err){
        res.status(400).send("got some error" + err);
    }
})

connectDB().then( 
    ()=> {
    console.log("connected");
    app.listen(3000, () => {
        console.log("server is listening...");
    });
   })
   .catch((err) => {
    console.log(err);
});