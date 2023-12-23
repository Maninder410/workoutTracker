import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";
import toast from "react-hot-toast";
export const useLogout = ()=>{
const {dispatch} = useAuthContext();
const {dispatch:workoutsDispatch} = useWorkoutsContext();
const logout = ()=>{
    //remove user from storage
    localStorage.removeItem('user');
    dispatch({type:'LOGOUT'});
    workoutsDispatch({type:'SET_WORKOUTS',payload:null})
    toast.success("logout successfully", {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
}

return {logout};
}
