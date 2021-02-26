import React from 'react';
import { Switch } from 'react-router-dom';
import pizza from '../Assets/Pizza.jpg';

const Form = () => {
    return (
        <>
            <div className="form-container">
                <header>
                    <h1>
                        Build Your Own Pizza
                    </h1>
                    <div className="pizzaImgForm-container">
                        <img className="form-pizzaImg" src={pizza} alt="Pizza"/>
                    </div>
                </header>
                <section className="form-section">
                   <form className='form'>
                       <h2>
                           Build Your Own Pizza
                       </h2>
                       <label>Name:
                           <input type='text' />
                       </label>
                       <label> Size of Pizza:
                           <select>
                               <option>Small</option>
                               <option>Medium</option>
                               <option>Large</option>
                           </select>
                       </label>
                       <label> Choice of Toppings:
                            <div className="choice-toppings">
                            <label> Pepperoni
                                <input type="checkbox" />
                            </label>
                            <label> Chicken
                                <input type="checkbox" />
                            </label>
                            <label> Sausage
                                <input type="checkbox" />
                            </label>
                            <label> Pineapple
                                <input type="checkbox" />
                            </label>
                           </div>
                       </label>
                       <label>Special Instructions:
                           <input type='text' />
                       </label>
                       <button className="form-btn">
                           Add To Order
                       </button>
                   </form> 
                </section>
            </div>
        </>
    );
};

export default Form;