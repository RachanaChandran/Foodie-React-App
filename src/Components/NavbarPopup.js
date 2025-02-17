import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NavbarPopup.scss';

function NavbarPopup(props) {
    function handleOnclick(){
        props.setpopup(false);
    }
    return (
        <div className='nav-popup'>
            <div className='close-btn'>
                <button onClick={handleOnclick}>X</button>
            </div>
            <div className='nav-popup-content'>
                <Link to={'/login'} onClick={handleOnclick}>Login</Link>
                <Link to={'/cart'} onClick={handleOnclick}>Cart</Link>
                <Link to={'/feedback'} onClick={handleOnclick}>Feedback</Link>
            </div>
        </div>
    );
}

export default NavbarPopup;