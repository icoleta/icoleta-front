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
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form className="w-1/6" onSubmit={handleSubmit}>
        <p className="text-lg mb-4">Editar entidade</p>

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

        <br></br>

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
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

        <br></br>

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
          onChange={handleChange}
          errors={errors}
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
          onChange={handleChange}
          errors={errors}
        />

        <br></br>

        <div class="btn-flex">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            value="Submit"
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarEntidade;
