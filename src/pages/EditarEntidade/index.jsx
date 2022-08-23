import React from "react";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

import "./style.css";

const EditarEntidade = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["cnpj", "name", "email", "password"]
  );

  async function whenSubmitted() {}

  return (
    <div class="m-8">
      <div class="text-center mt-8">
        <h2 class="text-4xl tracking-tight">Editar Entidade</h2>
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
                htmlFor="cnpj"
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

            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Nome
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                errors={errors}
              />
            </div>

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
            
          </div>
          
          <div class="flex flex-wrap -mx-3 mb-6">
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                class="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Editar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default EditarEntidade;
