function Formulario({ input, onChange, onAdicionar }) {
    return (
        <div>
            <input value={input} onChange={onChange} placeholder="Digite um nome" />
            <button onClick={onAdicionar}>Adicionar</button>
        </div>
    );
}

export default Formulario;