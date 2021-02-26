import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <header className="header">
            <h1>Lambda Eats</h1>
            <div className="header-btnDiv">
                <Link to="/" className='header-btn'>
                    Home
                </Link>
                <Link to="/" className='header-btn'>
                    Help
                </Link>
            </div>
            </header> 
        </div>
    );
};

export default Header;