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
    if (user.role === 1) navigate("/admin");
    else if (user.isCompany) navigate("/entidade/admin");
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
    <div class="m-8">
      <div class="text-center mt-8">
        <div class="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            class="w-12 h-12 text-olive-green"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 class="text-4xl tracking-tight">Acesso ao sistema</h2>
      </div>
      <div class="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
            <div class="w-full flex items-center justify-between px-3 mb-3 ">
              <label for="remember" class="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="mr-1 bg-white shadow"
                />
                <span class="text-sm text-gray-700 pt-1">Lembrar-me</span>
              </label>
              <div class="w-1/2 text-right">
                <a
                  href="/usuario/recuperar"
                  className="text-sunset-orange text-sm tracking-tight"
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                class="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
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
