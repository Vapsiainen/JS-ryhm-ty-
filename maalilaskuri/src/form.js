//Tässä tiedostossa on itse form eli komponentti joka sisältää tekstikentät, napit yms.
//Muuta Hinta ja Riittoisuus kentiksi jotka ottavat numeroita vastaan

import React, { useState } from "react";

function Form() {

    const [state, setState] = useState({
        nimi: "",
        hinta: "",
    })


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    return (

        <div>
            <img src="/images/kuva.png.jpg" alt=""/>    
            
            <h1>Maalilaskuri</h1>
        
        
           
            <form>

            <label for="Nimi">Nimi: {" "}</label>
            <input type="text" placeholder="Maalin nimi" id="Nimi" name="nimi" value={state.nimi} onChange={handleChange}/>
            <br />

            <label for="Hinta">Hinta: {" "}</label>
            <input type="text" placeholder="Maalin hinta/m2" id="Hinta"  name="hinta" value={state.hinta} onChange={handleChange}/>
            <br />

            <label for="Riittoisuus">Riittoisuus:</label>
            <input type="text" placeholder="Maalin riittoisuus/litra" id="Riittoisuus" />
            <br />

            <label for="Määrä">Määrä:</label>
            <input type="number" placeholder="Maalauskertojen määrä" id="Määrä" min="1" />
            <br />
            <br />

            <input type="submit" value="Submit"/>

            </form>

            <h3>Maalin nimi: {state.nimi} </h3>
            <h3>Maalin hinta: {state.hinta} </h3>

        </div>

    );
}

export default Form;