import React from "react";

function Form() {

    return (

        <form>

            <h1>Maalilaskuri</h1>

            <label for="Nimi">Nimi:</label>
            <input type="text" placeholder="Maalin nimi" id="Nimi" />
            <br />

            <label for="Hinta">Hinta:</label>
            <input type="text" placeholder="Maalin hinta/m2" id="Hinta" />
            <br />

            <label for="Riittoisuus">Riittoisuus:</label>
            <input type="text" placeholder="Maalin riittoisuus/litra" id="Riittoisuus" />
            <br />

            <label for="Määrä">Määrä:</label>
            <input type="number" placeholder="Maalauskertojen määrä" id="Määrä" min="1" />
            <br />
            <br />

        </form>
    );
}

export default Form;