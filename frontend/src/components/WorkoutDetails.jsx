import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { MdDelete } from "react-icons/md";
import  formatDistanceToNow  from 'date-fns/formatDistanceToNow';
import toast from "react-hot-toast";

const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutsContext();
const handleClick = async ()=>{
   const response = await fetch("/api/workouts/"+workout._id,{
    method:'DELETE'
   });
   const json = await response.json();
    if(response.ok){
      toast.success("Workout Removed");
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
      </div>
    )
  }
  
  export default WorkoutDetails