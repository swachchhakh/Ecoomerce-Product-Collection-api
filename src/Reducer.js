import React from 'react'



export const SumOfBasket = (basket) =>{
    return{
        itemCount : basket.reduce((total, item) => total + item.quantity, 0),
        totalPrice : basket.reduce((total, item) => total + (item.price*item.quantity), 0)
    }
}



const Reducer = ( state, {type, payload}) => {
    switch(type){
        case "ADD_TO_BASKET": 
        if (!state.basket.find(item => item.id === payload.id)) {
            state.basket.push({
              ...payload,
              quantity: 1,
            })
          }
    
          return {
            ...state,
            basket: [...state.basket],
            ...SumOfBasket(state.basket)
          }
        case "INCREASE": 
                    const itemIndex = state.basket.findIndex((item)=> item.id === payload.id)
                   

                    state.basket[itemIndex].quantity++;
                    
                    return {
                    ...state,
                    basket: [...state.basket],
                    ...SumOfBasket(state.basket)
                    }
        case "DECREASE": 
                    const itemIndex2 = state.basket.findIndex((item)=> item.id === payload.id)
                   

                    if(state.basket[itemIndex2].quantity>0){
                      state.basket[itemIndex2].quantity--;
                    }
                    if(state.basket[itemIndex2].quantity === 0){
                      state.basket.splice(itemIndex2, 1)
                    }
                    
                    return {
                    ...state,
                    basket: [...state.basket],
                    ...SumOfBasket(state.basket)
                    }            

               
        default : return state    
         
            
                   

       
    }
}

export default Reducer;
