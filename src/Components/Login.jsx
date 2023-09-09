import React,{useState} from 'react';
import '../Components/Login.css';
import{Link} from 'react-router-dom';
import Signup from './Signup';

function Login(props) {
  console.log(props,"props")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [openReg,setOpenReg]=useState(false)
  function handleLogin(e) {
      e.preventDefault()
      props.toggle()
  }
  function togglePop () {
    setOpenReg(!openReg);
};

  return <>
            <div className='main-container'>
           <div className='img'>
            <img src={require('./image1.png')}  alt=""/>
            </div>
            <div className='container-2'>
          <div className="popup-inner ">
          <div className='login-main'>
          
           <div className='nav-link'>Already a User? <div onClick={togglePop}>Sign Up</div> </div>  
            {openReg ? <Signup toggle={togglePop} /> : null}
           </div>
              <h2 className='login-tag'>Welcome Back!</h2>
              <h3 className='login-page'>Login to Continue</h3>
              <form onSubmit={handleLogin}>
                  <label className='input-info'>
                    <input type="email" value={username} onChange={e => setUsername(e.target.value)} placeholder="Employee ID" />
                  </label>
                  <label className='input-info'>
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
                  </label>
                  <div className='button-btn'>
                  <div className='login-btn'>
                  <button type="submit">Login</button>
                  </div>
                  <div className='password-btn'>
                  <h4>Forget Password?</h4>
                  </div>
                  </div>
              </form>
            
          </div>
      </div>
      </div>
      </>
} export default Login