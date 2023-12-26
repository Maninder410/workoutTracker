const express = require("express");
//express app
const dotenv = require("dotenv");
const Routes = require("./routes/workouts.js");
const userRoutes = require("./routes/userRoute.js");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({path:"./secret/.env"}); 
const app = express();
app.use(express.json());

app.use("/api/workouts",Routes);
app.use("/api/user",userRoutes);
mongoose.connect(process.env.MONGO_URI).then((e)=>{
console.log(`database connected to ${e.connection.host}`);
app.listen(process.env.PORT,()=>{
    console.log(`server is running on server ${process.env.PORT}`);
    })

}).catch((e)=>{
    console.log(e);
})
//listen for requests

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
app.get("/",(req,res)=>{//req,res->object
res.json({
    message:"Welcome to the app"
})


})

