import React from 'react'
import {Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useGlobalContext } from './context'
import { isInCart } from './helper'



function Products({ id, category, description, image, price, title }) {

    const { addToBasket, basket, increaseCart} = useGlobalContext()

    const product = { id, category, description, image, price, title }

    const [readMore, setReadMore] = useState(false)

    
    return (
        <div className="All-Products">
            <div className="product-image">
            <img src={image} alt=""/>
            </div>
            <div className={readMore ? 'details-max' : 'details' }>
            <h1>{title}</h1>
            <p>{readMore ? description : `${description.substring(0,100)}...`}
            <span className='readMore'  onClick={() => setReadMore(!readMore)}>{readMore ? `...Read Less` : `Read More`}</span></p>
           
            <p>${price}</p>

        
            <Link to={`/products/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
        {!isInCart(product, basket) && <button onClick={() => addToBasket(product)}>ADD TO CART</button>
          
    }
        {isInCart (product, basket) && <button onClick={() => increaseCart(product)}>ADD MORE</button>}
        

            </div>
            
        </div>
    )
}

export default Products
