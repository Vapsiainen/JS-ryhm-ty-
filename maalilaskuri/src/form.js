//Tässä tiedostossa on itse form eli komponentti joka sisältää tekstikentät, napit yms.
//Muuta Hinta ja Riittoisuus kentiksi jotka ottavat numeroita vastaan

import React, { useState } from "react";
import Tila from "./tila";

function Form() {

    const [state, setState] = useState({
        nimi: "",
        hinta: 0,
        riittoisuus: 0,
        määrä: 0,
    })


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    function laskeMääräJaHinta(pinta_ala, riittoisuus, tyyppikerroin) {
        let tulos = (pinta_ala/riittoisuus) * tyyppikerroin;
        return tulos;
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

            <label for="Riittoisuus">Riittoisuus: {" "}</label>
            <input type="text" placeholder="Maalin riittoisuus/litra" id="Riittoisuus" name="riittoisuus" value={state.riittoisuus} onChange={handleChange} />
            <br />

            <label for="Määrä">Määrä: {" "}</label>
            <input type="number" placeholder="Maalauskertojen määrä" id="Määrä" name="määrä" min="1" value={state.määrä} onChange={handleChange}/>
            <br />
            <br />

            <input type="submit" value="Laske"/>

            </form>

            <h3>Maalin nimi: {state.nimi} </h3>
            <h3>Maalin hinta: {state.hinta} </h3>
            <h3>Maalin riittoisuus: {state.riittoisuus} </h3>
            <h3>Maalin määrä: {state.määrä} </h3>
            <h3>Tarvittava maalin määrä on:  euroa</h3>

        </div>

    );
}

export default Form;