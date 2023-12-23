import { createReducer } from "@reduxjs/toolkit";
// export const authReducer = (state,action)=>{
    // switch(action.type){
    //     case 'LOGIN':
    //         return {user:action.payload}
    //     case 'LOGOUT':
    //         return {user:null}
    //     default:
    //         return state
    // }
// }

export const authReducer =createReducer({
    user:null
},{
    'LOGIN':(state,action)=>{
        state.user=action.payload
    },
    'LOGOUT':(state,action)=>{
        state.user = null
    }

})
// export const AuthContextProvider = ({children})=>{
//     const [state,dispatch] = useReducer(authReducer,{
//         user:null
//     })

    
    
// }


/*
import {createReducer} from "@reduxjs/toolkit"
const intialArray =localStorage.getItem("myCarti")?JSON.parse(localStorage.getItem("myCarti")):[];

export const cartReducer = createReducer({
    //these are called intial states
    cartItems:intialArray,
    subTotal:0,
    shipping:0,
    tax:0,
    total:0
},{
    //cases
    addToCart: (state,action)=>{
        const item = action.payload;
        const isItemExist = state.cartItems.find(i=>i.id === item.id);
        if(isItemExist){
            state.cartItems.forEach((i)=>{
                if(i.id === item.id){
                    i.quantity+=1;
                }
            })
        }
        else{
            state.cartItems.push(item);
        }
    },
    decrement:(state,action)=>{
        const item= state.cartItems.find(i=>i.id === action.payload);
        if(item.quantity >1){
            state.cartItems.forEach((i)=>{
                if(i.id === item.id) i.quantity-=1;
            })
        }
    },
    deleteFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter((i)=> i.id !== action.payload);
    },
    calculatePrice:(state)=>{
        let sum = 0;
        state.cartItems.forEach((i)=>(sum+=i.price*i.quantity));
        state.subTotal = sum;
        state.shipping = state.total > 1000?0:200;
        state.tax= +(state.subTotal*0.18).toFixed();
        state.total = state.subTotal+state.tax+state.shipping;
    }
});
*/