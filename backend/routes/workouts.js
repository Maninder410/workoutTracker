const express = require("express");
const { createWorkout, getAllWorkouts, deleteWorkout, getWorkout, updateWorkout } = require("../controllers/workoutController.js");
const requireAuth = require("../middleware/requireAuth.js");
const router = express.Router();
//require auth for all workout routes
router.use(requireAuth);
router.get("/",getAllWorkouts);
router.post("/", createWorkout);
router.get("/:id",getWorkout);
router.delete("/:id",deleteWorkout);
router.patch("/:id",updateWorkout);



module.exports = router;