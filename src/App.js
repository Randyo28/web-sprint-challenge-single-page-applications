import React from "react";
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Form from './components/Form';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/pizza'>
          <Form/>
        </Route>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
