import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

import { api } from "./../../services/api";

import "./style.css";

const CadastroEntidade = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ['trading_name', "company_name", "cnpj", 'phone', "email", "password"]
  );

  async function whenSubmitted() {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')
    await api.post("/company/register", values)
    alert("Entidade criada");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <p className="text-lg text-center mb-4">Cadastro de entidade</p>

        <div>
          <fieldset className="font-semibold my-2">Informações da Entidade</fieldset>
          <div className="flex mb-2">
            <div className="mr-4 w-1/2">
              <label
                htmlFor="trading_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nome
              </label>
              <Input
                type="text"
                id="trading_name"
                name="trading_name"
                onChange={handleChange}
                errors={errors}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="company_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Razão Social
              </label>
              <Input
                type="text"
                id="company_name"
                name="company_name"
                onChange={handleChange}
                errors={errors}
              />
            </div>            
          </div>

          <div className="flex my-4">
            <div className="mr-4 w-1/2">
              <label
                htmlFor="cnpj"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                CNPJ
              </label>
              <Input
                type="text"
                id="cnpj"
                name="cnpj"
                onChange={handleChange}
                errors={errors}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Telefone
              </label>
              <Input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          </div>
          <div className="">
              <label
                htmlFor="license"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Licença para operação
              </label>
              <Input
                type="file"
                id="license"
                name="license"
                onChange={handleChange}
                errors={errors}
              />
          </div>
        </div>

        <fieldset className="font-semibold my-2">Informações de Login</fieldset>
        <div className="flex my-2">
          <div className="mr-4 w-1/2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email da Entidade
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              errors={errors}
            />
          </div>
          <div className="w-1/2">
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
              onChange={handleChange}
              errors={errors}
            />
          </div>
        </div>

        <div class="btn-flex">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            value="Submit"
          >
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroEntidade;
