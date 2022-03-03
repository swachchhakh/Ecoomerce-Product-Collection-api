import React, {useEffect, useState}  from 'react'
import { useGlobalContext } from './context'
import { useParams, Link } from 'react-router-dom'
import { isInCart } from './helper'

function SingleProduct() {
    
    const {items, addToBasket, basket, increaseCart} = useGlobalContext()

   const {id} = useParams()


  

  const [product, setProducts] = useState(null)
  useEffect(() =>{

    const SingleProduct = items.find((item) => item.id === Number(id))
    setProducts(SingleProduct)
  },[id, items])
  

  
  if (!product) { return null }
  const { description, image, price, title } = product;
  const cartCheck = isInCart(product, basket)
   return ( <div className='singles'>
        <img src={image} alt=""/>
                  <div className="single-details">
                  <h1>{title}</h1>
                   <p className='description'>{description}</p>
                   <p>Price: ${price}</p>
            
                   <div className="action-buttons">

                       {!cartCheck && <button onClick={() => addToBasket(product)}>ADD TO CART</button>}
                       {cartCheck && <button onClick={() => increaseCart(product)} >ADD MORE</button>}
                   
                   <Link to="/products"><button>Go Back</button></Link>
                   
                   </div>
            
                   
                  </div>
           
   </div>)
    


  }



export default SingleProduct
