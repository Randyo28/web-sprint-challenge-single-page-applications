import React from 'react';
import pizza from '../Assets/Pizza.jpg';

function PizzaOrder(props) {
    return (
        <div className="order-container">
            <div className="pizzaImgForm-container">
                <img className="form-pizzaImg" src={pizza} alt="Pizza"/>
                <h1 className="congrats">Congrats! Your Order is On It's Way!</h1>
            </div>
        </div>
    );
}

export default PizzaOrder;