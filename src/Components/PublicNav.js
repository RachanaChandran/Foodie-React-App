import React from 'react';
import { Link } from 'react-router-dom';

function PublicNav(props) {
    return (
        <nav className='navigation'>
            <div className='navigation-logo'>
                <h2>Foodie.com!</h2>
            </div>
            <div className='navigation-link'>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Home</Link>
                <Link to={'/feedback'}>Feedback</Link>
            </div>
        </nav>
    );
}

export default PublicNav;