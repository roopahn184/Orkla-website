import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Products.css';
import CheckOut from './CheckOut';

const Products = (props) => {
  const navigate = useNavigate();
    const [openReg,setOpenReg]=useState(false)
    function checkOutToggle () {
        // setOpenReg(!openReg);
        navigate('/checkout');
    };
  return (
       <div className='product-container-1'>
        <div className='sub-product'>
            <div className='product-container-2'>
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
        <div className='sub-poduct-container'>
        <div> 
        <p className='h1-tag'>Subttal</p>
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
        <button className='check-box' onClick={checkOutToggle} >Checkout</button>  
            {/* {openReg ? <CheckOut toggle={checkOutToggle}  /> : null} */}
        </div>
        </div>
        
        </div>

      </div>
    </div>
  )
}

export default Products