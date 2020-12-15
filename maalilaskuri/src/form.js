//Tässä tiedostossa on itse form eli komponentti joka sisältää tekstikentät, napit yms.

import React from "react";
import kuva from "./kuva.jpg";


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nimi: null,
            hinta: null,
            riittoisuus: null,
            määrä: null,
            taloyhtiön_nimi: null,
            taloyhtiön_pinta_ala: null,
            taloyhtiön_tyyppikerroin: null,
            asunnon_nimi: null,
            asunnon_pinta_ala: null,
            asunnon_tyyppikerroin: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    laskeLitrat = (pinta_ala, riittoisuus, tyyppikerroin) => {
        let litrat = ((pinta_ala / riittoisuus) * tyyppikerroin);
        return litrat;
    }


    render() {

        //Näillä muuttujilla on helpompi käsitellä maalin, taloyhtiön ja asunnon tietoja
        //Maali
        let maalin_nimi = this.state.nimi;
        let maalin_hinta = Number(this.state.nimi);
        let maalin_riittoisuus = Number(this.state.nimi);
        let maalin_määrä = Number(this.state.nimi);

        //Taloyhtiö
        let taloyhtiön_nimi = this.state.taloyhtiön_nimi;
        let taloyhtiön_pinta_ala = Number(this.state.taloyhtiön_pinta_ala);
        let taloyhtiön_tyyppikerroin = Number(this.state.taloyhtiön_tyyppikerroin);

        //Asunto
        let asunnon_nimi = this.state.asunnon_nimi;
        let asunnon_pinta_ala = Number(this.state.asunnon_pinta_ala);
        let asunnon_tyyppikerroin = Number(this.state.asunnon_tyyppikerroin);

        return (

            <div>

                <h1>Maalilaskuri</h1>

                <img src={kuva} alt="kuva värikkäistä maaleista" />

                <div id="maalin_tiedot">

                    <h2>Maalin tiedot: </h2>

                    <form>

                        <label htmlFor="Nimi">Nimi: {" "}</label>
                        <input type="text" placeholder="Maalin nimi" id="1" name="maalin_nimi" value={this.state.nimi} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="Hinta">Hinta: {" "}</label>
                        <input type="text" placeholder="Maalin hinta euroina" id="2" name="maalin_hinta" value={this.state.hinta} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="Riittoisuus">Riittoisuus: {" "}</label>
                        <input type="text" placeholder="Maalin riittoisuus litroina" id="3" name="maalin_riittoisuus" value={this.state.riittoisuus} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="Määrä">Määrä: {" "}</label>
                        <input type="text" placeholder="Maalauskertojen määrä" id="4" name="maalin_määrä" min="1" value={this.state.määrä} onChange={this.handleChange} />
                        <br />
                        <br />

                    </form>

                </div>


                <div id="taloyhtiön_tiedot">

                    <h2>Taloyhtiön tiedot: </h2>

                    <form>

                        <label htmlFor="TaloyhtiönNimi">Taloyhtiön nimi: {" "}</label>
                        <input type="text" placeholder="Taloyhtiön nimi" id="5" name="taloyhtiön_nimi" value={this.state.taloyhtiön_nimi} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="TaloyhtiönPintaAla">Taloyhtiön kokonaispinta-ala: {" "}</label>
                        <input type="text" placeholder="Taloyhtiön kokonaispinta-ala" id="6" name="taloyhtiön_pinta_ala" value={this.state.taloyhtiön_pinta_ala} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="TaloyhtiönTyyppikerroin">Taloyhtiön tyyppikerroin: {" "}</label>
                        <input type="text" placeholder="Taloyhtiön tyyppikerroin" id="7" name="taloyhtiön_tyyppikerroin" value={this.state.taloyhtiön_tyyppikerroin} onChange={this.handleChange} />
                        <br />

                    </form>

                </div>


                <div id="asunnon_tiedot">

                    <h2>Yksittäisen asunnon tiedot: </h2>

                    <form>

                        <label htmlFor="AsunnonNimi">Asunnon nimi: {" "}</label>
                        <input type="text" placeholder="Esim AsuntoA" id="8" name="asunnon_nimi" value={this.state.asunnon_nimi} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="AsunnonPintaAla">Asunnon kokonaispinta-ala: {" "}</label>
                        <input type="text" placeholder="Asunnon pinta-ala neliömetreinä" id="9" name="asunnon_pinta_ala" value={this.state.asunnon_pinta_ala} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="AsunnonTyyppikerroin">Asunnon tyyppikerroin: {" "}</label>
                        <input type="text" placeholder="Asunnon tyyppikerroin" id="10" name="asunnon_tyyppikerroin" value={this.state.asunnon_tyyppikerroin} onChange={this.handleChange} />
                        <br />


                    </form>

                    <h3>Taloyhtiö tarvitsee {this.laskeLitrat(taloyhtiön_pinta_ala, maalin_riittoisuus, taloyhtiön_tyyppikerroin)} litraa maalia</h3>


                </div>

            </div>

        );
    }
}

export default Form;

