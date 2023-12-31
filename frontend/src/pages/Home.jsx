import { useEffect} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
// components
import { useDispatch ,useSelector} from "react-redux";
const Home = () => {
const {workouts} = useSelector(state=>state.work);
const dispatch = useDispatch();
const {user} = useSelector(state=>state.auth);
  useEffect(() => {
    const fetchWorkouts = async () => {

      const response = await fetch('/api/workouts',{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
          dispatch({type:"SET_WORKOUTS",payload:json.workouts})
      }
    }
    if(user){
      fetchWorkouts();
    }
    
  }, [dispatch,user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout}  />
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home