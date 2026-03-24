import { useState } from "react";

function Cadastro() {
    const [form, setForm] = useState({ nome: "", email: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <input name="nome" onChange={handleChange} placeholder="Nome" />
            <input name="email" onChange={handleChange} placeholder="Email" />
            <p>Nome: {form.nome}</p>
            <p>Email: {form.email}</p>
        </div>
    );
}

export default Cadastro;