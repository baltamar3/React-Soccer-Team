import React from 'react';
import './App.css';
import Jugadores from "./components/Jugador";
import Titulares from './components/Titular';
import Suplentes from "./components/Suplente"

function App() {
  return (    
    <div className="App">
      <main>
        <h1>Jugadores</h1>
        <Jugadores/>
        <h1>Titulares</h1>
        <Titulares/>
        <h1>Suplentes</h1>
        <Suplentes/>
      </main>
    </div>
  );
}


export default App;
