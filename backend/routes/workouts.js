const express = require("express");
const Workout = require("../models/workoutModel.js");
const { createWorkout, getAllWorkouts, deleteWorkout, getWorkout, updateWorkout } = require("../controllers/workoutController.js");

const router = express.Router();
router.get("/",getAllWorkouts);
router.post("/", createWorkout);
router.get("/:id",getWorkout);
router.delete("/:id",deleteWorkout);
router.patch("/:id",updateWorkout);



module.exports = router;