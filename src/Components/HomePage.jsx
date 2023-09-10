import React ,{useState} from "react";
import '../Components/Navbar.css';
import {Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import{BsCart2} from 'react-icons/bs';
import{RxPerson} from 'react-icons/rx';
import Login from './Login'
function HomePage(){
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };
    return <>
    <div className="navbar-secondary ">
      <div className="primary-div">
        <img src="https://seeklogo.com/images/E/eastern-logo-665A4354A3-seeklogo.com.png" alt="" />
      </div>
      <div className="secondary-div ">
        <img src="https://yesscale.com/wp-content/uploads/2019/05/MTR-logo-400x200.jpg" alt="" />
      </div>
    </div>
    <div className="background-3"></div>
    <div className="navbar-third">
      <div className="third-div">
        <img src="https://media.istockphoto.com/id/1215542092/photo/portrait-of-smiling-young-man-in-a-white-t-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=pxfrgImIf__D9yQJjgfJ1HGSeGjPwQoD3sAa-iWz0JU=" alt="" />
      </div>
      <div className="forth-div">
       <h1 className="tag">NEW AND TRENDING</h1>
       <p className="p-name">LEVEL UP YOUR STYLE GAME</p>
       <div>
            <button onClick={togglePop} className="button-tag">SHOP NOW</button>
            {seen ? <Login toggle={togglePop} /> : null}
        </div>
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
} export default HomePage