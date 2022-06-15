import React from 'react'

import './style.css'

const CadastroUsuario = () => {
  return (
      <div className="container-cadastrar">
        <form>

          <p className="titulo-cadastro">Cadastro de usuário</p>

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf"></input>
          <br></br>

          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome"></input>
          <br></br>

          <label htmlFor="email">Email:</label>
          <input type="mail" id="email" name="email"></input>
          <br></br>

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha"></input>
          <br></br>

          <div class="btn-flex">
            <button type="submit" className="btn-cadastro" value="Submit">Criar conta de usuário</button>
          </div>
          
        </form>
    </div>
  )
}

export default CadastroUsuario
