import React from "react";
import { Link } from "react-router-dom";

function Entity() {
  return (
    <div>
      <Link to="/entidade/registro">Cadastrar entidade</Link>
      <Link to="/entidade/login">Login de entidade</Link>
      <Link to="/entidade/edicao">Editar entidade</Link>
      <Link to="/entidade/admin">Admin entidade</Link>
      <Link to="/ponto/criar">Registrar ponto</Link>
    </div>
  );
}

export default Entity;
