import {useState} from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
export const useSignup = ()=>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const dispatch = useDispatch();
    const signup = async (email,password) =>{
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/user/signup",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})

        });
        const json =await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            setIsLoading(false);
            //save the user to local storage
            toast.success("signup completed", {
                icon: '👏',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              });
            localStorage.setItem('user',JSON.stringify(json));
            //update auth context
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);
        }
    }
    return {signup,isLoading,error};
}