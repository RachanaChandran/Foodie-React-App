import React, { useState } from 'react';
import '../Style/Loginpopup.scss';
function Login(props) {
    const[active,setactive] = useState(false);
    // function closepopup(){
    //     setactive(true);
    // }
    return (
        <div className='main'>
            <form className='popup-form'>
            <button className='close-btn'>X</button>
                <h2>Login Here</h2>
                <div className='form-input'>
                    <input type='text' name='username' placeholder='Username'/><br/>
                    <input type='password' name='password' placeholder='password'/><br/>
                </div>
                
                <button className='submit' type='submit'>LOGIN</button>

            </form>
        </div>
    );
}

export default Login;