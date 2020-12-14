//Tänne voi testailla kaikkea
import React, { Component } from "react";
import taloyhtiö from "./taloyhtiöData";

class Taloyhtiö extends Component {
    render() {
        return (
            <div>
                {taloyhtiö.map((taloyhtiöjuttu, index) => {
                    return (
                        <div>
                        <h1>{taloyhtiöjuttu.nimi}</h1>
                        <h1>{taloyhtiöjuttu.pinta_ala}</h1>
                        <h1>{taloyhtiöjuttu.tyyppikerroin}</h1>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Taloyhtiö;




/*
import React from "react";

function ContactCard(props) {
    return(
        <div>
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    );
}

export default ContactCard;


Näin kutsutaan ContactCardia:

function App() {
    return(
        <div>
            <ContactCard 
                contact={{name: "Mr. Whiskerson,", imgUrl: "https://examplepic.com", phone: "0400886848", email: "mr.whiskaz@catnap.meow"}}
            />
        </div>
    );
}
*/