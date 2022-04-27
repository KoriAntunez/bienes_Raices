import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Registrar from "./pages/Registrar";
import Reservar from "./pages/Reservar";


function App() {
  return (
    <Container>

    <BrowserRouter>
      <Routes>
        <Route exact path="/registrar" element={<Registrar/>} />
        <Route path="/reservar" element={<Reservar/>} />
      </Routes>
    </BrowserRouter>
    </Container>

  );
}

export default App;
