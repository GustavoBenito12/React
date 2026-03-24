import { useState } from "react";

function ContadorHistorico() {
    const [valor, setValor] = useState(0);
    const [historico, setHistorico] = useState([]);

    const incrementar = () => {
        const novoValor = valor + 1;
        setValor(novoValor);
        setHistorico([...historico, novoValor]);
    };

    return (
        <div>
            <h2>Contador com Histórico</h2>
            <p>Valor atual: {valor}</p>
            <button onClick={incrementar}>Incrementar</button>
            <h3>Histórico:</h3>
            <ul>
                {historico.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContadorHistorico;