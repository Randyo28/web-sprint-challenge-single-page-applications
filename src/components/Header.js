import React from 'react';

const Header = () => {
    return (
        <div>
           <header className="header">
            <h1>Lambda Eats</h1>
            <div className="header-btnDiv">
                <button className='header-btn'>
                Home
                </button>
                <button className='header-btn'>
                Help
                </button>
            </div>
            </header> 
        </div>
    );
};

export default Header;