import React from 'react';
import logo from './logo.svg';
import './App.css';
import Liste from './components/Liste';


const App: React.FC = () =>{
  return <div>

<Liste text='hello' name={{firstname:'John',lastname:'Hopkins'}} />



  </div>
}

export default App;
