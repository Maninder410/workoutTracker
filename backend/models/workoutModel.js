const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
},{timestamps:true})
const Workout = mongoose.model("Workout",workoutSchema);
module.exports = Workout;