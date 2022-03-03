import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import Cart from './cart';
import { useGlobalContext } from './context';
import cartImg from './shopping-bag.png'

const Navbar = () => {

    const {basket, count, dispatch, state, itemCount} = useGlobalContext() 

    console.log(basket)
    console.log(state)

    

    return (
        <nav>
            <div><Link to ="/" className='logo' >Lighthouse</Link></div>
            <div className="menu">
                <Link to ="/products" className='menu-Links' >Products</Link>
                <Link to = "/cart" style={{textDecoration: 'none'}}> <img src={cartImg} alt="Cart" className='cart' onClick={() => dispatch({type: "TOTAL"})}/>
            {
                itemCount > 0 ? <p className='cartItemsIcon'>{itemCount}</p> : <p></p>
            }</Link>
               

            </div>
        </nav>
    );
    
}

export default Navbar;
