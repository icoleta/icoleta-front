import React from "react";
import { Link } from "react-router-dom";

function Entity() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col pt-12 space-y-2">
        <Link to="/entidade/registro">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Cadastrar entidade
          </button>
        </Link>
        <Link to="/entidade/login">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Login de entidade
          </button>
        </Link>
        <Link to="/entidade/edicao">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Editar entidade
          </button>
        </Link>
        <Link to="/entidade/admin">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Admin entidade
          </button>
        </Link>
        <Link to="/ponto/criar">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Registrar ponto
          </button>
        </Link>

        <Link to="/usuario/cadastrar">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Cadastrar Usuário
          </button>
        </Link>

        <Link to="/usuario/login">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Login Usuário
          </button>
        </Link>

        <Link to="/usuario/recuperar">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-80">
            Recuperar senha usuário
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Entity;
