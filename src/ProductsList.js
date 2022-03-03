import React from 'react'
import axios from 'axios'
import Products from './Products'

import { useGlobalContext } from './context'
function ProductsList() {

    const {items} = useGlobalContext()
        

    
    

   
    return (
        <div className='productList'>
     
     {items.map((item) => {
          return <Products key={item.id} {...item} />
        })}
        
        </div>
    )
}

export default ProductsList
