import React from 'react';
import Jugadores from "./components/Jugador";
import Titulares from './components/Titular';
import Suplentes from "./components/Suplente"


//material
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Navbar from './components/globals/Navbar';



function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar/>
      <Container fixed >
        <Box textAlign="center" m={1}>
          <main>
            <h1>Jugadores</h1>
            <Jugadores />
            <h1>Titulares</h1>
            <Titulares />
            <h1>Suplentes</h1>
            <Suplentes />
          </main>
        </Box>
      </Container>
    </div>
  );
}


export default App;
