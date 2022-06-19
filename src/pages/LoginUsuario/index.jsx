import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Input from "../../components/Input";

const LoginUsuario = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { Login } = useAuth();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = formData;
    const wasLoginSuccessful = await Login(email, password);
    if (wasLoginSuccessful) {
      alert("Login feito com sucesso");
      navigate("/");
    } else {
      alert("Nome de usuário ou senha incorretas");
    }
  }

  return (
    <div className="flex justify-center items-center h-4/6 flex-col">
      <form onSubmit={handleSubmit}>
        <p className="text-lg mb-4">Acesso ao sistema | Usuário</p>

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <Input
          type="mail"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
        <br></br>

        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Senha
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <br></br>

        <a
          href="/usuario/recuperar"
          className="text-sm text-blue-500 block my-2"
        >
          Esqueci minha senha
        </a>

        <div className="btn-flex-login">
          <button
            type="submit"
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginUsuario;
