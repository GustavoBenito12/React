function Item({ nome, onRemover }) {
    return (
        <li>
            {nome}
            <button onClick={onRemover}>Remover</button>
        </li>
    );
}

export default Item;