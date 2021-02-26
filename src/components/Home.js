import React from 'react';
import pizza from '../Assets/Pizza.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="pizzaImg-container">
                <img className="pizzaImg" src={pizza} alt="Pizza"/>
                <Link to='/pizza' className="pizza-btn">Pizza?</Link>
            </div>
        </div>
    );
};

export default Home;