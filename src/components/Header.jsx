import React from "react";
import svg from "../assets/recycle_icon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";

function Header() {
  const { signed } = useAuth();

  return (
    <div className="flex px-32 py-8 justify-between">
      <Link to="/">
        <div className="flex items-center child:ml-4">
          <img src={svg} className="w-8 h-8" alt="logo" />
          <h3 className="text-4xl font-bold text-slate-900 tracking-tighter">
            IColeta
          </h3>
        </div>
      </Link>
      <div className="child:ml-4 flex items-center text-slate-700 font-semibold text-sm">
        <Link to="/mapa">Mapa</Link>
        <Link to="/lista-de-pontos">Pontos de coleta</Link>
        {signed ? (
          <Link to="/ponto/criar">Cadastrar ponto</Link>
        ) : (
          <Link to="/entidade/login">Cadastrar ponto</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
