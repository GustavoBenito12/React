import { useState } from "react";

function Saudacao() {

    const [nome,setNome] = useState("")
     
    return(
        <div>
            <input onChange={(e) => setNome(e.target.value)} />

            {nome && <h2>Olá {nome}</h2>}
        </div>
    )

}
export default Saudacao