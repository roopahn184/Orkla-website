import React,{useState} from 'react';
import '../Components/Contact.css';

function Contact(){
  const[data, setData]=useState(false);
  function shoppingPop(){
    setData(!data)
  }
  return <>
  <div className='div-container'>
  <div className='shopping-container'>
    <div>
        <button className='cart-container'>Shopping Cart</button>
    </div>
    <div>
        <button onClick={shoppingPop} className="check-container">Shopping & Checkout</button>
    </div>
    <div>
        <button className='track-container' >Track Order</button>
    </div>
  </div>
  </div>
  </>
} export default Contact