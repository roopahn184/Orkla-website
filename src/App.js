import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Contact  from "./Components/Contact";
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
// import Signup from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route  path='/Contact' element={<Contact />} />
          {/* <Route  path='/signup' element={<Signup />} /> */}
          </Routes>
      <Footer/>
        
       </Router> 
    </>
  )
}

export default App