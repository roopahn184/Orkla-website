import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Contact  from "./Components/Contact";
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' component={<HomePage />} />
          <Route  path='/Contact' component={<Contact />} />
          </Routes>
      <Footer/>
        
       </Router> 
    </>
  )
}

export default App