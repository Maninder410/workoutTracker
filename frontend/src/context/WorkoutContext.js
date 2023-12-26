import { createReducer } from '@reduxjs/toolkit'

export const workoutsReducer = createReducer({
  workouts:[],
  name:0,
  load:0,
  reps:0,
  edit_id:0
},{
  'SET_WORKOUTS':(state,action)=>{
    state.workouts = action.payload
  },
  'CREATE_WORKOUT':(state,action)=>{
    state.workouts = [action.payload,...state.workouts]
  },
   'DELETE_WORKOUT':(state,action)=>{
    state.workouts=state.workouts.filter((w)=>w._id !== action.payload._id)

   },
   'EDIT_WORKOUT':(state,action)=>{
    state.name = action.payload.name;
    state.load = action.payload.load;
    state.reps = action.payload.reps;
    state.edit_id = action.payload.edit_id;

}

})

  