import { useState } from "react";

function SistemaCadastro() {
    const [form, setForm] = useState({ nome: "", email: "" });
    const [usuarios, setUsuarios] = useState([]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

   const salvar = () => {
    if (!form.nome.trim()) {
        alert("Nome não pode ser vazio!");
        return;
    }
    setUsuarios([...usuarios, form]);
    setForm({ nome: "", email: "" }); 
};

    return (
        <div>
            <h2>Cadastro de Usuários</h2>
            <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <button onClick={salvar}>Salvar</button>
            <ul>
                {usuarios.map((u, i) => (
                    <li key={i}>{u.nome} - {u.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default SistemaCadastro;