import React from "react";

function Form() {

    return (

        <form>

            <h1>Maalilaskuri</h1>

            <label>

                Nimi:
            <input type="text" placeholder="Maalin nimi" name="Nimi"/>
                <br />

            Hinta:
            <input type="text" placeholder="Maalin hinta/m2" name="Hinta" />
                <br />

            Riittoisuus:
            <input type="text" placeholder="Maalin riittoisuus/litra" name="Riittoisuus" />
                <br />

            Määrä:
            <input type="number" placeholder="Maalauskertojen määrä" name="määrä" min="1" />

            </label>

        </form>
    );
}

export default Form;