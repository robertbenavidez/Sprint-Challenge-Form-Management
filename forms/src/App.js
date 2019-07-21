import React, { useState } from 'react';
import RegForm from './components/RegForm';
import './App.css';
import useLocalStorage from "./hooks/useLocalStorage"
import Display from './components/Display'
import {Route} from "react-router-dom"

function App() {
 // const [initialToken, setInitialToken] = useState(localStorage.getItem('token')); //useLocalStorage("token");
 const [intitialToken, setInitialToken] = useLocalStorage('token')
  return (
    <div className="App">
      <h1>Registration Form</h1>
      {/* initialToken && <Component/> */}
      <Route exact path="/" render={props => <RegForm {...props} setInitialToken={setInitialToken}/> } />
      <Route exact path="/display" component={Display}/>
    </div>
  );
}

export default App;
