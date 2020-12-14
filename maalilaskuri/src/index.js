//App-komponentti, joka pitää sisällään kaikki alikomponentit, renderöidään täällä

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import Form from "./Form";
import TestiForm from "./testialue";


ReactDOM.render(<App />, document.getElementById("root"));