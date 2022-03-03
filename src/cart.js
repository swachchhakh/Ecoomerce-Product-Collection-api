import React from 'react'


import {useGlobalContext} from './context'

function Cart() {
  

   
    
    const { count, basket, itemCount, totalPrice, increaseCart, decreaseCart } = useGlobalContext()

    console.log(itemCount)
    console.log(totalPrice)

   
  return( <div className='cartContainer'>

        {basket.map((items) => (

            <div key={items.id} className='cart-items'>
                <img src={items.image}alt=""/>
                    <div className="details-quantity">
                    <p >{items.title}</p><br />
                    <div className="quantity-selection">
                    <button className='decrease' onClick={() => decreaseCart(items)}>-</button>{items.quantity}
                    <button className='increase' onClick={() => increaseCart(items)}>+</button>
                    </div>
                    </div>
                    <p >{items.price}</p>

            </div>
        ) 
     

             
                    
                
            

        )}
        <span className='divider'></span>
           <div className="total-price">
            <p>Total:</p>
            <span></span>
            <span>$ {parseFloat(totalPrice).toFixed(2)}</span>
        </div>
        </div>
  )
    
}

export default Cart
