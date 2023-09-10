import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
// import Contact  from "./Components/Contact";
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route  path='/product' element={<Products />} />
          <Route path='/checkout' element={<CheckOut/>}/>
          {/* <Route  path='/Contact' element={<Contact />} /> */}
          </Routes>
      <Footer/>
        
       </Router> 
    </>
  )
}

export default App