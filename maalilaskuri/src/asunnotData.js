//Asuntojen data
//Objekteja arrayn sisällä

const asunnot = [

    {
        nimi: "AsuntoA",
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

    },

    {
        nimi: "AsuntoB",
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

    },

    {
        nimi: "AsuntoC",
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

    },

]

export default asunnot;
