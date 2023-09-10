import React,{useState} from 'react';
import '../Components/CheckOut.css';
import CheckoutPage from './CheckoutPage'; 

 function CheckOut(){

  const [openReg,setOpenReg]=useState(false)

  function shoppingPop(){
    setOpenReg(!openReg);
  }  
  return <>
  <div className='toggle-container'>
   <div className='sub-toggle b'>
  
        <button className='cart-container b'>Shopping Cart</button>
        <button onClick={shoppingPop}  className='cart-container'>Shopping & Checkout</button>
        {openReg ? <CheckoutPage toggle={shoppingPop} /> : null}

        <button  className='cart-container' >Track Order</button>
  
  </div>
  </div>
  </>
} export default CheckOut