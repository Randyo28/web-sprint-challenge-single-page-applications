import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Form from './components/Form';
import PizzaOrder from './components/PizzaOrder';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'

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

  
  const [formValues, setFormValues] = useState(initialFormValues)

  const [newPizza, setNewPizza] = useState(pizza)

  const inputChangeValue = (name, value) => {
    
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
        console.log(res.data)
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
          submit={formSubmit}/>
        </Route>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
