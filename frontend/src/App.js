import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
// import Login from './Pages/Signup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/CSS/Login'
import Signup from './Pages/Signup'
import Logout from './Pages/Logout'
import Payment from './Components/payment/Payment'


const App = () => {
  return (
    <div>
      
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
    <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
   <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
   <Route path="/product/:productId" element={<Product />} />

    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/payment' element={<Payment/>}/>
    
   
   
   
   </Routes>
   <Footer/>
  </BrowserRouter>
      
    </div>
  )
}
export default App;
