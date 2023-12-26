import { MdDelete } from "react-icons/md";
import  formatDistanceToNow  from 'date-fns/formatDistanceToNow';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import {useNavigate} from "react-router-dom"
const WorkoutDetails = ({ workout }) => {
  const {user} = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editHandler = ()=>{
    if(!user){
      return ;
    }
    const data = {name:workout.name,load:workout.load,reps:workout.reps,edit_id:workout._id};
    dispatch({type:"EDIT_WORKOUT",payload:data})
    navigate('/edit');
  }
const handleClick = async ()=>{
  if(!user){
    return ;
  }
   const response = await fetch("/api/workouts/"+workout._id,{
    method:'DELETE',
    headers:{
      'Authorization':`Bearer ${user.token}`

    }
   });
   const json = await response.json();
    if(response.ok){
      toast.success("Workout Removed", {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }
}
    return (

      <div className="workout-details">
        <h4>{workout.name}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow (new Date(workout.createdAt),{addSuffix:true})}</p>
        <span onClick={handleClick}><MdDelete/></span>
      <div className="divedit" onClick={editHandler}><MdEdit/></div>
      </div>
    )
  }
  
  export default WorkoutDetails