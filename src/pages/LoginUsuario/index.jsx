import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

const LoginUsuario = () => {
  const navigate = useNavigate();
  const { Login, user } = useAuth();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["email", "password"]
  );

  if (user) {
    if (user.role === 'admin') navigate("/admin");
    else if (user.role === 'company') navigate("/entidade/admin");
    else navigate("/perfil");
  }

  async function whenSubmitted() {
    const { email, password } = values;
    const wasLoginSuccessful = await Login(email, password);
    if (!wasLoginSuccessful) {
      alert("Nome de usuário ou senha incorretas");
    }
  }

  return (
    <div className="m-8">
      <div className="text-center mt-8">
        <div className="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-olive-green"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">Acesso ao sistema</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                type="mail"
                id="email"
                name="email"
                onChange={handleChange}
                errors={errors}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                errors={errors}
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label htmlFor="remember" className="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-1 bg-white shadow"
                />
                <span className="text-sm text-gray-700 pt-1">Lembrar-me</span>
              </label>
              <div className="w-1/2 text-right">
                <a
                  href="/usuario/recuperar"
                  className="text-sunset-orange text-sm tracking-tight"
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUsuario;
