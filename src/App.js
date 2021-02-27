import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Form from './components/Form';
import PizzaOrder from './components/PizzaOrder';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';

const App = () => {

  const pizza = []

  const initialFormValues = {
    name: '',
    select: '',
    pepperoni: false,
    chicken: false,
    sausage: false,
    pineapple: false,
    special: '',
  }

  const initialFormErrors = {
    name: '',
    select: '',
  }

  //*Initial formVales which will be changed
  const [formValues, setFormValues] = useState(initialFormValues)

  //*New Pizza order startes empty and will be added
  const [newPizza, setNewPizza] = useState(pizza)

  //*Initial Error messages
  const [errors, setErrors] = useState(initialFormErrors)

  //* Button is disabled at default until fields are filled out
  const [disabled, setDisabled] = useState(true)

  const inputChangeValue = (name, value) => {

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        // happy path
        setErrors({...errors, [name]: ''})
      })
      .catch(err => {
        //bad path
        setErrors({...errors, [name]: err.errors[0]})
      })
    
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    
    const getPizza = {
      name: formValues.name.trim(),
      select: formValues.select,
      pepperoni: formValues.pepperoni,
      chicken: formValues.chicken,
      sausage: formValues.sausage,
      pineapple: formValues.pineapple,
      special: formValues.special.trim()
    }

    postNewPizza(getPizza)
  }

  useEffect(() => {
    const getData = () => {
      axios
      .get('https://reqres.in/api/users?page=1')
      .then(res => {
        console.log(res.data.data)
        setNewPizza(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    getData()
   }, [])

   const postNewPizza = (getPizza) => {
    axios
    .post('https://reqres.in/api/users', getPizza)
    .then(res => {
      setNewPizza([...newPizza, res.data])
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

    setFormValues(initialFormValues)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/pizza-order'>
          <PizzaOrder/>
        </Route>
        <Route path='/pizza'>
          <Form values={formValues} 
          change={inputChangeValue}
          submit={formSubmit}
          disabled={disabled}
          errors={errors}
              />
        </Route>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
