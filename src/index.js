import React from 'react';
import ReactDOM from 'react-dom/client';
import {Calculator} from './components/Calculator'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Nav from './components/Nav';
import './index.css'



const App = ()=>{
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

