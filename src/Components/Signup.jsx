import React,{useState} from 'react';
import '../Components/Signup.css';

 function  Signup (props){
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    function handleSignin(e) {
        e.preventDefault()
        props.toggle()
    }

  return (
    <div className='container'>
        <div className='sub-container'>
        <h1 className='nav-color-1'>Sign Up</h1>
        <h2 className='nav-color-2'>Glad to see you!</h2>
          <div className="sub-container-2">
           <form onSubmit={handleSignin}>
            <div className='form-container'>
            <div className='label-container'>
            <label>
                Full Name 
                <input type="text" />
            </label>
            <label>
               Employee ID 
                <input type="text" />
            </label>
            <label>
               Employee Branch 
                <input type="text" />
            </label>
            <label>
              Phone 
                <input type="text" />
            </label>
            </div>
            <div className='label-container'>
                <label>
                    Employee Designation
                    <input type="text" />
                </label>
                <label>
                    Employee Branch ID
                    <input type="text" />
                </label>
                <label>
                   Mail ID
                    <input type="text" />
                </label>
            </div>
            </div>
            <button className='sign-button'>Sign Up</button>
        </form>
        </div>
        </div>
    </div>
    
  )
}

export default Signup