//App-komponentti kokoaa kaikki komponentit yhteen

import React from "react";
import Form from "./Form";
import Tilat from "./Tilat.js";
import asunnotData from "./asunnotData";
import taloyhtiöData from "./taloyhtiöData";
import './App.css';
import Taloyhtiö from "./testialue";

function App() {

  const asuntoKomponentit = asunnotData.map(item => <Tilat key={item.nimi} asunto={item} />);

  //{asuntoKomponentit}

  return (

    <div>

      <Form />

    </div>

  );
}

export default App;
