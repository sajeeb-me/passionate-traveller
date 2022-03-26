import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <h3>Passionate Traveler</h3>
            </div>
            <div className='d-none d-md-block'>
                <a href="/home">Home</a>
                <a href="/explore">Explore</a>
                <a href="/book">Book now</a>
            </div>
        </nav>
    );
};

export default Header;