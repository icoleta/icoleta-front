import React from 'react'

import './style.css'

const CadastroEntidade = () => {
  return (
      <div className="container-cadastrar">
        <form>

          <p className="titulo-cadastro">Cadastro de entidade</p>

          <label htmlFor="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" name="cnpj"></input>
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
            <button type="submit" className="btn-cadastro" value="Submit">Criar conta</button>
          </div>
          
        </form>
    </div>
  )
}

export default CadastroEntidade
