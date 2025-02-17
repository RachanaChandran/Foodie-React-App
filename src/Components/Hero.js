import React from 'react';
import img from '../Assets/hero.jpg';
import '../Style/Hero.scss';
import NavBar from './NavBar';

function Hero(props) {
    return (
        <div className='hero'>
            <NavBar/>
            <div className='hero-content'>
                <img src={img} alt="food"/>
                <div className='hero-content-data'>
                    <h2>Savoring every bite!</h2>
                    <p>Lorem distinctio, nihil ipsam enim! Labore recusandae quidem cum provident deleniti ullam dolorum deserunt consectetur ipsa rerum.</p>
                </div>
            </div>
        </div>
        
    );
}

export default Hero;