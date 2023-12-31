import {useState,useEffect} from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
export const useLogin = ()=>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const dispatch = useDispatch();

     useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            dispatch({type:'LOGIN',payload:user});
        }
        // eslint-disable-next-line
    },[])
    const login = async (email,password) =>{
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/user/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})

        });
        const json =await response.json();
        if(!response.ok){
            setIsLoading(false);
            // setError(json.error);
            toast.error(json.error);
        }
        if(response.ok){
            setIsLoading(false);
            toast.success("login successfull", {
                icon: '👏',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              });
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json));
            //update auth context
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);
        }
    }
    return {login,isLoading,error};
}