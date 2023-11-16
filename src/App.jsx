import React from 'react';
import Landing from './Componentes/landing_catch';
import './index.css'; // Replace with your CSS file name
import Expertiese from './Componentes/expertiese';
import Navbar from './Componentes/navbar';
import Cards from './Componentes/cards';

function App() {
  return (
    <div className=' tracking-wider' >
    <Landing />
    <Expertiese />
    <Navbar/>
    <Cards/>
    </div>
  );
}

export default App;
