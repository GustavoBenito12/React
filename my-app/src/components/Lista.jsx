import Item from "./Item";

function Lista({ nomes, onRemover }) {
    return (
        <ul>
            {nomes.map((nome, index) => (
                <Item key={index} nome={nome} onRemover={() => onRemover(index)} />
            ))}
        </ul>
    );
}

export default Lista;