import { useState } from "react";

function Contador() {
    
    const [valor, setValor] = useState(0)

    return (

        <div>
            <h1>Contador de cliques</h1>

            <h2>{valor}</h2> 

            <button onClick={() => setValor(valor + 1)}>Incrementar</button>

            <button onClick={() => setValor(valor - 1)}>decrementar</button>
        </div>
    )
}

export default Contador