import React from 'react';
import pizza from '../Assets/Pizza.jpg';
import { Link } from 'react-router-dom'

const Form = (props) => {

    const {values, change, submit, disabled, errors}= props;

    const onChange = (e) => {
        const {name, value, type, checked} = e.target

        const valueSet = type === 'checkbox' ? checked : value

        change(name, valueSet)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }

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
                   <form onSubmit={onSubmit} className='form'>
                       <h2>
                           Build Your Own Pizza
                       </h2>
                       <div className='errors'>
                            <div>{errors.name}</div>
                            <div>{errors.select}</div>
                            <div>{errors.special}</div>
                        </div>
                       <label>Name:
                           <input name='name' value={values.name} onChange={onChange}  type='text' />
                       </label>
                       <label> Size of Pizza:
                           <select name="select" value={values.select} onChange={onChange}>
                               <option value=''>--Select-Pizza-Size--</option>
                               <option value='small'>Small</option>
                               <option value='medium'>Medium</option>
                               <option value='large'>Large</option>
                           </select>
                       </label>
                       <label> Choice of Toppings:
                            <div className="choice-toppings">
                            <label> Pepperoni
                                <input onChange={onChange} name="pepperoni" type="checkbox" checked={values.pepperoni} />
                            </label>
                            <label> Chicken
                                <input onChange={onChange} name='chicken' type="checkbox" checked={values.chicken}/>
                            </label>
                            <label> Sausage
                                <input onChange={onChange} name='sausage' type="checkbox" checked={values.sausage}/>
                            </label>
                            <label> Pineapple
                                <input onChange={onChange} name='pineapple' type="checkbox"  checked={values.pineapple} />
                            </label>
                           </div>
                       </label>
                       <label>Special Instructions:
                           <input value={values.special} onChange={onChange} name='special' type='text' />
                       </label>
                       {/* <Link to='/pizza-order'> */}
                       <button disabled={disabled} className="form-btn">
                           Add To Order
                       </button>
                       {/* </Link> */}
                   </form> 
                </section>
            </div>
        </>
    );
};

export default Form;