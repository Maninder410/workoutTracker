import { createReducer } from "@reduxjs/toolkit";
export const authReducer =createReducer({
    user:null
},{
    'LOGIN':(state,action)=>{
        state.user=action.payload
    },
    'LOGOUT':(state,action)=>{
        state.user = null
    }

})
