import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

import personApi from "./../../services/api/person";

const CadastroUsuario = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["cpf", "name", "email", "password"]
  );

  async function whenSubmitted() {
    await personApi.createUser(values);
    alert("Usuário criado");
    navigate("/");
  }

  return (
    <div class="m-8">
      <div class="text-center mt-8">
      
      <h2 class="text-4xl tracking-tight">
      Cadastro de usuário
      </h2>
      
    </div>
    <div class="flex justify-center my-2 mx-4 md:mx-0">
      <form onSubmit={handleSubmit} class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <fieldset className="font-semibold my-2 text-lg text-center">
              Informações da Pessoais
        </fieldset>
        
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">Nome</label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                errors={errors}
              />
          </div>

          <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cnpj">Matrícula/Siape</label>
              <Input
                type="text"
                id="cnpj"
                name="cnpj"
                onChange={handleChange}
                errors={errors}
              />
          </div>

          <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">Telefone</label>
              <Input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                errors={errors}
              />
          </div>
        </div>
          <fieldset className="font-semibold my-2 text-lg text-center">
            Informações de Login
          </fieldset>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email de usuário</label>
              <Input
                type="mail"
                id="email"
                name="email"
                onChange={handleChange}
                errors={errors}
              />
          </div>

          <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">Senha</label>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                errors={errors}
              />
          </div>
        </div>


        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
              <button type="submit" class="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500">Criar conta de usuário</button>
          </div>
        </div>
      </form>
  </div>

  
</div>
    // <div className="flex justify-center items-center h-5/6 flex-col">
    //   <form onSubmit={handleSubmit} className="w-1/6">
    //     <p className="text-lg mb-4">Cadastro de usuário</p>

    //     <label
    //       htmlFor="cpf"
    //       className="block mb-2 text-sm font-medium text-gray-900"
    //     >
    //       CPF:
    //     </label>
    //     <Input
    //       type="text"
    //       id="cpf"
    //       name="cpf"
    //       onChange={handleChange}
    //       errors={errors}
    //     />
    //     <br></br>

    //     <label
    //       htmlFor="name"
    //       className="block mb-2 text-sm font-medium text-gray-900"
    //     >
    //       Nome:
    //     </label>
    //     <Input
    //       type="text"
    //       id="name"
    //       name="name"
    //       onChange={handleChange}
    //       errors={errors}
    //     />
    //     <br></br>

    //     <label
    //       htmlFor="email"
    //       className="block mb-2 text-sm font-medium text-gray-900"
    //     >
    //       Email:
    //     </label>
    //     <Input
    //       type="email"
    //       id="email"
    //       name="email"
    //       onChange={handleChange}
    //       errors={errors}
    //     />
    //     <br></br>

    //     <label
    //       htmlFor="password"
    //       className="block mb-2 text-sm font-medium text-gray-900"
    //     >
    //       Senha:
    //     </label>
    //     <Input
    //       type="password"
    //       id="password"
    //       name="password"
    //       onChange={handleChange}
    //       errors={errors}
    //     />
    //     <br></br>

    //     <button
    //       type="submit"
    //       className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    //     >
    //       Criar conta de usuário
    //     </button>
    //   </form>
    // </div>
  );
};

export default CadastroUsuario;
