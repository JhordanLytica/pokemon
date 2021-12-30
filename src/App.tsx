import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Pokedex } from './pokedex/index';
import { PokemonInformation } from './pokedex/pokemonInformation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/:name" element={<PokemonInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
