import React from 'react'

import './style.css'

const RecuperarSenha = () => {
  return (
    <div className="container-recuperar">
      <form>

        <p className="titulo-cadastro">Recuperar senha</p>

        <label htmlFor="email">Email:</label>
        <input type="mail" id="email" name="email"></input>
        <br></br>
        
        <div className="btn-flex-login">
          <button type="submit" className="btn-login" value="Submit"> Enviar email </button>
        </div>

      </form>
    </div>
  )
}

export default RecuperarSenha