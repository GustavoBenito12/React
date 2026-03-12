function Botao() {
  function mostrarMensagem() {
    alert("Botão clicado!")
  }

  return (
    <button onClick={mostrarMensagem}>Clique aqui</button>
  )
}

export default Botao