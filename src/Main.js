import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Assignment from './Assignment';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/assignment' component={Assignment}/>      
      </Switch>
    </main>
  );
}

export default App;
