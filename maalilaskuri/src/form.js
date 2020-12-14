//Tässä tiedostossa on itse form eli komponentti joka sisältää tekstikentät, napit yms.

import React from "react";

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            nimi: null,
            hinta: null,
            riittoisuus: null,
            määrä: null,
            asunnot: [],
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

    componentDidMount() { 
    }


    render() {

        return (

            <div>

                <h1>Maalilaskuri</h1>

                <form>

                    <label for="Nimi">Nimi: {" "}</label>
                    <input type="text" placeholder="Maalin nimi" id="1" name="nimi" value={this.state.nimi} onChange={this.handleChange} />
                    <br />

                    <label for="Hinta">Hinta: {" "}</label>
                    <input type="text" placeholder="Maalin hinta euroina" id="2" name="hinta" value={this.state.hinta} onChange={this.handleChange} />
                    <br />

                    <label for="Riittoisuus">Riittoisuus: {" "}</label>
                    <input type="text" placeholder="Maalin riittoisuus litroina" id="3" name="riittoisuus" value={this.state.riittoisuus} onChange={this.handleChange} />
                    <br />

                    <label for="Määrä">Määrä: {" "}</label>
                    <input type="text" placeholder="Maalauskertojen määrä" id="4" name="määrä" min="1" value={this.state.määrä} onChange={this.handleChange} />
                    <br />

                    <button onChange={this.handleChange}>Lähetä</button>
                    <br />

                </form>

                <h3>Maalin nimi: {this.state.nimi} </h3>
                <h3>Maalin hinta: {this.state.hinta} </h3>
                <h3>Maalin riittoisuus: {this.state.riittoisuus} </h3>
                <h3>Maalauskertojen määrä: {this.state.määrä} </h3>
                <h3></h3>

            </div>
        );
    }
}

export default Form;

