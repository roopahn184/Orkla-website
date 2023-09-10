import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          </Routes>
       </Router> 
    </>
  )
}

export default App