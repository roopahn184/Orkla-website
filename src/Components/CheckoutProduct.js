import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/CheckoutProduct.css'
const CheckoutProduct = (props) => {
  const navigate = useNavigate();
    const [openReg,setOpenReg]=useState(false)
    function checkOutToggle () {
        navigate('/Checkout');
    };
  return <>
  <div>
         <div>
          <div className='product-img'>
        <img src="https://media.istockphoto.com/id/1215542092/photo/portrait-of-smiling-young-man-in-a-white-t-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=pxfrgImIf__D9yQJjgfJ1HGSeGjPwQoD3sAa-iWz0JU=" alt=""  height="100%" width="80%"/>
      </div>
      <div className='details-menu'>
        <h2 className='nav-tag'>Active Essential Men's Slim Fit Polo</h2>
        <select>
            <option>Color</option>
            <option>White</option>
         </select> 
         <select>
            <option>Size 42</option>
            <option>44</option>
         </select> 
         <select>
            <option>Quantity 1</option>
         </select>
         <div className='span-tag'>
         <span>Move to favorites</span>
        <span>Remove</span>
        </div>
      </div>
      </div>
      <div className='h1-tag'>
        <h1 className='h1-tag'>Discription</h1>
        <p className='h1-tag'>Just like the name suggests, the Active Essential Men's Polo is indeed a major essential addition casual wardrobe. perfect</p>
        <h2 className='h1-tag'>Pickup</h2>
        <p className='h1-tag'>Find a Store</p>
        <hr />
          <p>Summary</p>
          <div className='card-content'>
          <div className='card-btn-1'>
          <button>Gift card or discount code</button>
          </div>
          <div  className='card-btn-2'>
          <button>Apply</button>
          </div>
          </div>
        <div className='sub-poduct-container'>
        <div> 
        <p className='h1-tag'>Subtotal</p>
        <p className='h1-tag'>Estimated shipping & handling</p>
        <p className='h1-tag'>Estimated Tax</p>
        </div>
        <div>
        <p className='h1-tag'>$30.35</p>
        <p className='h1-tag'>.......</p>
        <p className='h1-tag'>.......</p>
        </div>
        </div>
       <hr />
       <div className='total-container'>
        <div>
        <h2 className='h1-tag'>Total</h2>
        </div>
        <div>
        <p className='h1-tag'>USD $30.35</p>
        </div>
        </div>
        <div className='button-tagle'>
        <div>Continue Sopping</div>
        <div>
        <button className='check-box' onClick={checkOutToggle} >Cash on Delivery</button>   
        </div>
        </div>
        
        </div>
        </div>
  </>
}

export default CheckoutProduct