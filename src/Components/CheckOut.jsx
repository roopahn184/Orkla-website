import React,{useState} from 'react';
import '../Components/CheckOut.css';
import CheckoutPage from './CheckoutPage'; 
import CheckoutProduct from './CheckoutProduct';
import TrackOrder from './TrackOrder';

 function CheckOut(){

  const [openReg,setOpenReg]=useState(false);
  const[openTrack, setOpenTrack] = useState(false);

  function trackingPop(){
   setOpenTrack(!openTrack)
  }

  function shoppingPop(){
    setOpenReg(!openReg);
  }  
  return <>
  <div className='checkout-page '>
   <div className='checkout-headers '>
  
        <button className="ship-add" >Shopping Cart</button>
        <button onClick={shoppingPop} className="ship-add"  >Shopping & Checkout</button>
        <button  className="ship-add" onClick={trackingPop}>Track Order</button>
  
  </div>
  <div className='checkout-body '>
  {openReg ? 
  (
    <>
    <CheckoutPage toggle={shoppingPop} /> 
    <CheckoutProduct/>
 
   </> 
  ):null
  }
  <div className='checkout-body '>
  {openTrack ? 
  (
    <>
     <TrackOrder toggle={trackingPop} /> 
 
   </> 
  ):null
  }
 </div>

    <div>
  </div>
  </div>
  </div>
  </>
} export default CheckOut