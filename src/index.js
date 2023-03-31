import React from 'react';
import ReactDOM from 'react-dom/client';
import {Calculator} from './components/Calculator'
import './index.css'



const App = ()=>{
  return (
    <Calculator/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

