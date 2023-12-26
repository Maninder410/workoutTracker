import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
const Editworkout = () => {
    
const {user} = useSelector(state=>state.auth);
const [Name,setName] = useState("");
const [Load,setLoad] = useState("");
const [Reps,setReps] = useState("");
const navigate = useNavigate();
const {name,load,reps,edit_id} = useSelector(state=>state.work);
    useEffect(()=>{
        setName(name);
        setLoad(load);
        setReps(reps);
    },[name,load,reps])

    const handleEdit = (e)=>{
        e.preventDefault();
    const editWorkout = async ()=>{
        const data = {name:Name,load:Load,reps:Reps}
        const response = await fetch(`/api/workouts/${edit_id}`,{
            method:'PATCH',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'Application/json',
                'Authorization':`Bearer ${user.token}`
            }
        })
        if(response.ok){
            toast.success("workout updated");
            navigate("/");
        }
       
    }
    editWorkout();

    }
    return (
        <div className="edit-form">
          <h2>Edit Workout</h2>
          <form onSubmit={handleEdit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/>
            </div>
    
            <div className="form-group">
              <label htmlFor="load">Load (in Kg):</label>
              <input type="number" value={Load} onChange={(e)=>setLoad(e.target.value)} />
            </div>
    
            <div className="form-group">
              <label htmlFor="reps">Reps:</label>
              <input type="number" value={Reps} onChange={(e)=>setReps(e.target.value)}/>
            </div>
    
            <div className="button-group">
              <button type="submit" className="edit-button">Edit</button>
              {/* <button type="button" className="cancel-button">Cancel</button> */}
            </div>
          </form>
        </div>
      );
}

export default Editworkout