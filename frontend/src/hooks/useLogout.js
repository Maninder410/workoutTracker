
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
export const useLogout = ()=>{
    const dispatch = useDispatch();
const logout = ()=>{
    //remove user from storage
    localStorage.removeItem('user');
    dispatch({type:'LOGOUT'});
    dispatch({type:'SET_WORKOUTS',payload:null})
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
