import React,{useState} from "react";
import '../Components/Navbar.css';
import {Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import{BsCart2} from 'react-icons/bs';
import{RxPerson} from 'react-icons/rx';
import Login from './Login'
import HomePage from "./HomePage";


const Navbar = () => {
  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };
   return <>
    <div className=" header">
      <div className="backgeround-1"></div>
        <div className="nav-bar ">
          <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu--8wRDdyJJExNqUDKBLvIrKx5Qcp3ToJYFIQzjvcjwfYrE3y9iCTWsBb9AxpFO8y8jk&usqp=CAU" width={200} height={80}/>
          </div>
          <div className="sub-div">
           <div >
            <input type="text" className="input-item"/>
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
  
    </>
  
}

export default Navbar