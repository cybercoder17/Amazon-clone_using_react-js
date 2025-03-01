import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import {Routes,Route} from 'react-router-dom'
import Products from './Screen/Products/Products'
import Footer from './Component/Footer/Footer'
import FooterSign from './Screen/footersign/FooterSign'
import Cart from './Screen/Cart/Cart'
function App() {

  return (
    <>
      <div className='App'> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <FooterSign/>
        <Footer/>
      </div>
    </>
  )
}

export default App
