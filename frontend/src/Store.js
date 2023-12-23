import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./context/AuthContext";
import { workoutsReducer } from "./context/WorkoutContext";
const store = configureStore({
    reducer:{
        auth:authReducer,
        work:workoutsReducer
    },
})
export default store;