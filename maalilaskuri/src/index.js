import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  render() {
    return (

      <form>

        <h1>Maalilaskuri</h1>

        <label>

            Nimi:
            <input type="text"  placeholder="Maalin nimi" name="Nimi" />
            <br />

            Hinta:
            <input type="text"  placeholder="Maalin hinta/m2" name="Hinta" />
            <br />

            Riittoisuus:
            <input type="text"  placeholder="Maalin riittoisuus/litra" name="Riittoisuus" />
            <br />

            Määrä:
            <input type="number"  placeholder="Maalauskertojen määrä" name="määrä" min="1" />

        </label>

      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));