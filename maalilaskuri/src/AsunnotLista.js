//Asuntojen data
//Objekteja arrayn sisällä

import React from "react";
import asunnotData from "./asunnotData.json"

class AsunnotLista extends React.Component {

    render() {

        return (

            <div>

                {asunnotData.map((juttu, id) => {
                    
                })}

            </div>
        )
    }
}


export default AsunnotLista;


