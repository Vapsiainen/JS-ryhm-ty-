import React from "react";

function Lähetä() {
    const sayHello = () => {
        alert("Hello");
    }
    
    return (
        <div>
            <h3>Tämä on komponentti</h3>
            <button onClick={sayHello}>Click me</button>
        </div>
    )
}

export default Lähetä;