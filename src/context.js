import React, {useState,useEffect,useReducer, useContext} from 'react'

import axios from 'axios'
import reducer from './Reducer'
import { SumOfBasket } from './Reducer'



const AppContext = React.createContext()




const AppProvider = ({children}) =>{


    const [items, setItems] = useState([]);

    const initialState ={
       
        basket: [],
        count: 0,
        total: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)
        

    
    const fetchData = async () =>{
        const response =  await axios.get("https://fakestoreapi.com/products").catch((err) => {console.log("err" ,err)})
        setItems(response.data)
    }      
    
    
    
    
       
       useEffect(()=>{
   
           fetchData()
   
       },[])

       const addToBasket = (product) =>{
        dispatch({type : "ADD_TO_BASKET" , payload: product})
    }   
   const increaseCart = (product) =>{
       dispatch({type: "INCREASE" , payload: product})
   }
   const decreaseCart = (product) =>{
    dispatch({type: "DECREASE" , payload: product})
}

  return  (<AppContext.Provider value={{...state, ...SumOfBasket, dispatch, items, addToBasket, increaseCart,decreaseCart}}>

        {children}
    </AppContext.Provider>)



}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
export { AppContext, AppProvider }