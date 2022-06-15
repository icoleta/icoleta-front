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

        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          value="Submit"
        >
          {" "}
          Login{" "}
        </button>
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          type="button"
        >
          <a href="/entidade/registro">Cadastrar</a>
        </button>

        </div>
      </form>
    </div>
  )
}

export default LoginEntidade
