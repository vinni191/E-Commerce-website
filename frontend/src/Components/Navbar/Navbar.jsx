import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[menu ,setMenu]=useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
      </div>
     <ul className='nav-menu'>
      <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none'}}to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       <li onClick={()=>setMenu("men")}><Link style={{textDecoration:'none'}}to="men">Men</Link> {menu==="men"?<hr/>:<></>}</li>
       <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none'}} to="/womens">Women </Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none'}}to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to="/login"> <button className="btn btn-primary w-100 rounded">Login</button></Link>
       <Link to='/logout'><button className="btn btn-danger w-100 rounded">Logout</button></Link>
       <Link to="/cart"> <img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
        
      </div>

    </div>
  )
}

export default Navbar