import React from 'react'

import './style.css'

const LoginEntidade = () => {
  return (
    <div className="container-login">
      <form>

        <p className="titulo-cadastro">Acesso ao sistema</p>

        <label htmlFor="email">Email:</label>
        <input type="mail" id="email" name="email"></input>
        <br></br>

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha"></input>
        <br></br>

        <a href='/' className="link-recuperacao">Esqueci minha senha</a>

        <div className="btn-flex-login">
          <button type="submit" className="btn-login" value="Submit"> Login </button>
          <button className="btn-cadastro-login" type="button"><a href="/entidade/cadastro">Cadastrar</a></button>
        </div>
      </form>
    </div>
  )
}

export default LoginEntidade
