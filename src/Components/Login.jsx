import React,{useState} from 'react';
import '../Components/Login.css';

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
      e.preventDefault()
      // Code to handle login goes here
      props.toggle()
  }

  return <>
      <div className="popup">
          <div className="popup-inner">
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
      </>
} export default Login