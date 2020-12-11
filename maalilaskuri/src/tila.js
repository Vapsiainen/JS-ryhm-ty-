//Taloyhtiö- ja asunto-objektit huoneineen
//Näitä ei syötetä www-sivuille

function Tila() {

    const taloyhtiö = {
        nimi: "Taloyhtiö xy",
        pinta_ala: 200,
        tyyppikerroin: 1
    };
    
    //Asunto A on objekti, jonka sisällä on keittiö-, olohuone- ja makuuhuoneobjektit
    const asuntoA = {
        nimi: "A",
        kokonais_pinta_ala: 70,
        tyyppikerroin: 1.5,
        
        keittiö: {
            nimi: "keittiö",
            pinta_ala: 15,
            tyyppikerroin: 1.5
        },
    
        olohuone: {
            nimi: "olohuone",
            pinta_ala: 25,
            tyyppikerroin: 1.5
        },
    
        makuuhuone: {
            nimi: "makuuhuone",
            pinta_ala: 15,
            tyyppikerroin: 1.5
        }
    };
    
    
    //Sama juttu Asunto B:llä...
    const asuntoB = {
        nimi: "B",
        kokonais_pinta_ala: 70,
        tyyppikerroin: 1,
    
        keittiö: {
            nimi: "keittiö",
            pinta_ala: 17,
            tyyppikerroin: 1
        },
    
        olohuone: {
            nimi: "olohuone",
            pinta_ala: 28,
            tyyppikerroin: 1
        },
    
        makuuhuone: {
            nimi: "makuuhuone",
            pinta_ala: 13,
            tyyppikerroin: 1
        }
    };
    
    
    //Ja Asunto C:llä
    const asuntoC = {
        nimi: "C",
        kokonais_pinta_ala: 60,
        tyyppikerroin: 1.2,
    
        keittiö: {
            nimi: "keittiö",
            pinta_ala: 10,
            tyyppikerroin: 1.2
        },
    
        olohuone: {
            nimi: "olohuone",
            pinta_ala: 20,
            tyyppikerroin: 1.2
        },
    
        makuuhuone: {
            nimi: "makuuhuone",
            pinta_ala: 10,
            tyyppikerroin: 1.2
        }
    };

}


export default Tila;