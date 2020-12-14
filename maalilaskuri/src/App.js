//App-komponentti kokoaa kaikki komponentit yhteen

import React from "react";
import Form from "./Form";
import Tilat from "./Tilat.js";
import AsunnotLista from "./AsunnotLista";
import './App.css';

function App() {

  //const asuntoKomponentit = asunnotData.map(item => <Tilat key={item.nimi} asunto={item} />);

  //{asuntoKomponentit}

  return (

    <div>

      <AsunnotLista />

      <Form />

    </div>

  );
}

export default App;
