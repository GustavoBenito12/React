import { useState } from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";

function ListaDinamica() {
    const [nomes, setNomes] = useState([]);
    const [input, setInput] = useState("");

    const adicionar = () => {
        if (!input.trim()) return;
        setNomes([...nomes, input.trim()]);
        setInput("");
    };

    const remover = (index) => {
        setNomes(nomes.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Lista Dinâmica</h2>
            <Formulario input={input} onChange={(e) => setInput(e.target.value)} onAdicionar={adicionar} />
            <Lista nomes={nomes} onRemover={remover} />
        </div>
    );
}

export default ListaDinamica;