import React from 'react'

const RecuperarSenha = () => {
  return (
    <div>
    <h2>Recuperar Senha</h2>
    <p>Informe seu E-mail</p>

    <form>
      <label>
        <span>E-mail:</span>
        <input
          type="text"
          placeholder="E-mail"
        />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  </div>
  )
}

export default RecuperarSenha