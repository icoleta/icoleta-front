import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

const RecuperarSenha = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["email"]
  );

  async function whenSubmitted() {
    //await api.post("/send-reset-email", values);
    alert("Link para atualização de senha enviado por email");
  }

  return (
    <div className="m-8">
      <div className="text-center mt-8">
        <h2 className="text-4xl tracking-tight">Recuperar senha</h2>
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
                Email:
              </label>
              <Input
                type="mail"
                id="email"
                name="email"
                onChange={handleChange}
                errors={errors}
              />
            </div>
        

            
          </div>

          <div className="flex mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Enviar email
              </button>

              <Link
                to="/usuario/atualizar"
                className="appearance-none block w-full text-center bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Atualizar senha
              </Link>

          </div>
        </form>
      </div>
    </div>
    // <div className="flex justify-center items-center h-4/6 flex-col">
    //   <form onSubmit={handleSubmit}>
    //     <p className="text-lg mb-4">Recuperar senha</p>

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

    //     <div className="btn-flex-login">
    //       <button
    //         type="submit"
    //         className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    //       >
    //         Enviar email
    //       </button>

    //       <Link
    //         to="/usuario/atualizar"
    //         className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    //       >
    //         Atualizar senha
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
};

export default RecuperarSenha;
