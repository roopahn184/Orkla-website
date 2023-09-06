import React from "react";
import '../Components/Navbar.css';
import {Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import{BsCart2} from 'react-icons/bs';
import{RxPerson} from 'react-icons/rx';

const Navbar = () => {

  return (
    <>
    <div className=" header">
      <div className="backgeround-1"></div>
        <div className="nav-bar">
          <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu--8wRDdyJJExNqUDKBLvIrKx5Qcp3ToJYFIQzjvcjwfYrE3y9iCTWsBb9AxpFO8y8jk&usqp=CAU" width={200} height={80}/>
          </div>
          <div className="sub-div">
           <div>
            <input type="text" />
            <div className="search-icon">
             <AiOutlineSearch />
            </div>
           </div>
           <ul className='nav-menu'>
           <div className="main-menu">
          
            <li>
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li>
              <Link className="nav-link" to="/product">PRODUCTS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/offers">OFFERS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Contact">CONTACT US</Link>
            </li>
            <li className="cart-icon">
              <RxPerson/>
            </li>
            <li className="person-icon">
             <BsCart2/> 
            </li>
            </div>
            </ul>
          </div>
        </div>
     
      <div className="backgeround-2">Exclusive merchandise shop for Orkla india, MTR Food and Estern condiments Employees</div>
    </div>
    <div className="navbar-secondary">
      <div className="primary-div">
        <img src="https://seeklogo.com/images/E/eastern-logo-665A4354A3-seeklogo.com.png" alt="" />
      </div>
      <div className="secondary-div">
        <img src="https://yesscale.com/wp-content/uploads/2019/05/MTR-logo-400x200.jpg" alt="" />
      </div>
    </div>
    <div className="background-3"></div>
    <div className="navbar-third">
      <div className="third-div">
        <img src="https://media.istockphoto.com/id/1215542092/photo/portrait-of-smiling-young-man-in-a-white-t-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=pxfrgImIf__D9yQJjgfJ1HGSeGjPwQoD3sAa-iWz0JU=" alt="" />
      </div>
      <div className="forth-div">
       <h1>NEW AND TRENDING</h1>
       <p>LEVEL UP YOUR STYLE GAME</p>
       <button>SHOP NOW</button>
      </div>
    </div>
    <div className="navbar-forth">
    <div className="fifth-div">
        <h2>Swiss Military Polyester 46 cms Black</h2>
        <h2>Laptop Backpack and Combo Packs</h2>
        <p>Brand-Swiss Military</p>
        <button className="button-item">Deal of the day</button>
      </div>
      <div className="sixth-div">
        <img src="https://arcticfox.com/cdn/shop/files/Artboard54_620x.png?v=1692788231" alt="" />
      </div>
    </div>

     
    </>
  )
}

export default Navbar