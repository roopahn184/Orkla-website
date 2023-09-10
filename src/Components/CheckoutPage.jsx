import React from 'react';
import './CheckoutPage.css';
function CheckoutPage(){
  return <>
     <div className='form'>
        <p className='title'>Billing Details</p>
        <div className='form-name'>
         <div className='first-name'>
          <label>First Name</label>
          <input className='input-box'/>
          </div>
          <div className='first-name'>
          <label>Last Name</label>
          <input className='input-box' type="text"/>
          </div>
          </div>

          <div className='form-sub-name'>
          <label> COMPANY NAME(OPTIONAL)</label>
          <input className='input'/>
          <label>COUNTRY/REGION*</label>
          <input type="text" placeholder='india' />
          <label>STREET ADDRESS*</label>
          <input type="text" placeholder='House number and street name' /> <br />
          <input type="text" placeholder='Apartment, suit, unit, etc.(optional)' />
          <label>TOWN/CITY</label>
          <input type="text" /> 
          <label>STATE*</label>
          <input type="text" placeholder='Delhi'/>
          <label>ZIP*</label>
          <input type="text" />
          </div>
        
      </div>
  </>
}
export default CheckoutPage