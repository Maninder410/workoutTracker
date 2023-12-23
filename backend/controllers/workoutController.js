const Workout = require("../models/workoutModel.js");
const mongoose = require("mongoose");
const createWorkout = async (req,res)=>{
    const {name,load,reps} = req.body;

     let emptyFields = [];
     if(!name){
        emptyFields.push('name');
     }
     if(!load){
        emptyFields.push('load');
     }
     if(!reps){
        emptyFields.push('reps');
     }
     if(emptyFields.length>0){
        return res.status(400).json({
            message:"Please Fill all the fields",emptyFields
        })
     }
    try{
        const user_id = req.user._id;
    const workout = await Workout.create({name,load,reps,user_id});
    res.status(200).json({
        workout
    })
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
const getAllWorkouts = async (req,res)=>{
    const user_id = req.user._id;
const workouts = await Workout.find({user_id}).sort({createdAt:-1});
    res.status(200).json({
        workouts
    })
}
const deleteWorkout = async (req,res)=>{
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}
const updateWorkout = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:"Invalid id"
        })
    }
    const updatedWorkout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    });
    if(!updatedWorkout){
        return res.status(404).json({
            error:"No such workout"
        })
    }
    res.status(200).json({
        message:"workout updated"
    })


}
const getWorkout = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:"Invalid id"
        })
    }
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({
            error:"No such Workout"
        })
    }
    res.status(200).json({
        workout
    })
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout,
    getWorkout
}