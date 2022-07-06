import React, { useRef, useState } from "react";
import svg from "../assets/recycle_icon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import useOutsideClick from "../hooks/useOutsideClick";

function Header() {
  const { signed } = useAuth();
  const wrapperRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useOutsideClick(wrapperRef, () => setIsDropdownOpen(false));

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
      <div className="flex">
        <div className="child:ml-4 flex items-center text-slate-700 font-semibold text-sm">
          <Link to="/mapa">Mapa</Link>
          <Link to="/lista-de-pontos">Pontos de coleta</Link>
          {/* {signed ? (
            <Link to="/ponto/criar">Cadastrar ponto</Link>
          ) : (
            <Link to="/entidade/login">Cadastrar ponto</Link>
          )} */}
        </div>
        {signed ? (
          <div className="mx-8">
            <div
              onClick={() => setIsDropdownOpen(true)}
              className="relative cursor-pointer w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
            >
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div
              id="dropdown"
              ref={wrapperRef}
              className={
                (isDropdownOpen ? "" : "hidden ") +
                "absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44"
              }
            >
              <ul
                className="py-1 text-sm text-gray-700"
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a
                    href="/entidade/admin"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Seu perfil
                  </a>
                </li>
                <li>
                  <a
                    href="/entidade/edicao"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Editar dados
                  </a>
                </li>
                <li>
                  <a
                    href="/ponto/criar"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cadastrar ponto
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="child:ml-4 flex items-center text-slate-700 font-semibold text-sm">
            <Link to="/usuario/cadastrar">Criar conta</Link>
            <Link to="/entidade/registro">Criar conta como Entidade</Link>

            <Link to="/usuario/login">Fazer Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
