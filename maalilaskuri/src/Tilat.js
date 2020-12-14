import React from "react";

function Tilat(props) {
    return(
        <div>
            <h3>{props.asunto.nimi}</h3>
            <p>{props.asunto.kokonais_pinta_ala}</p>
            <p>{props.asunto.tyyppikerroin}</p>
        </div>
    );
}

export default Tilat;