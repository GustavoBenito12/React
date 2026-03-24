import { useState } from "react";

function Tarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState("");

    const adicionar = () => {
        if (!input.trim()) return;
        setTarefas([...tarefas, input.trim()]);
        setInput("");
    };

    const remover = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite uma tarefa" />
            <button onClick={adicionar}>Adicionar</button>
            <p>Você tem {tarefas.length} tarefas cadastradas</p>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                        <button onClick={() => remover(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tarefas;