import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import NavbarPopup from './NavbarPopup';
import Login from './Login';

function NavBar(props) {
    const[popup,setpopup] = useState(false);
    const[loginpopup,setloginpopup] = useState(false);

    function handlePopup(){
       setpopup(!popup);
    }
    function handleModal(){
        setloginpopup(!loginpopup);
    }
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link to={'/'}>Foodie.com!</Link>
                </div>
                <div className='navbar-menu'>
                    <Link onClick={handleModal}>Login</Link>
                    <Link to={'/Cart'}>Cart</Link>
                    <Link to={'/feedback'}>Feedback</Link>
                </div>
                <div className='navbar-font-bar' >
                    <FontAwesomeIcon icon={faBars} onClick={handlePopup} />
                </div>
                {popup === true&& <NavbarPopup setpopup={setpopup}/>}
            </nav>
                {loginpopup === true&&<Login setloginpopup={setloginpopup}/>}
            
            
        </>
    );
}

export default NavBar;