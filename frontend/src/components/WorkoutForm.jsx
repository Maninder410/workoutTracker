import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import toast from "react-hot-toast";

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext();
  const [name, setName] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields,setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {name, load, reps}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.message);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      toast.success("Workout Added");
      setError(null)
      setEmptyFields([]);
      setName('')
      setLoad('')
      setReps('')
      dispatch({type:'CREATE_WORKOUT',payload:json.workout});
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input className={emptyFields.includes("name")?"error":""}
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

      <label>Load (in kg):</label>
      <input className={emptyFields.includes("load")?"error":""}
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input className={emptyFields.includes("reps")?"error":""}
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm