import React, { useRef, useState } from "react";
import svg from "../assets/recycle_icon.png";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import useOutsideClick from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

function Header() {
  const { signed, user, Logout } = useAuth();
  const wrapperRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useOutsideClick(wrapperRef, () => setIsDropdownOpen(false));

  const navigate = useNavigate();

  async function logoutWrapper() {
    await Logout();
    navigate("/");
  }

  return (
    <div className="flex flex-col px-16 py-8  justify-between tablet:flex-row tablet:px-32">
      <Link to="/">
        <div className="flex items-center tablet:child:ml-4 justify-center mb-2">
          <img src={svg} className="w-8 h-8" alt="logo" />
          <h3 className="text-4xl font-bold text-slate-900 tracking-tighter">
            IColeta
          </h3>
        </div>
      </Link>
      <div className="flex justify-center">
        {signed ? (
          <div className="child:ml-4 flex items-center text-slate-700 font-semibold text-sm">
            {user.isCompany ? (
              <Link
                to="/entidade/admin"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Seu perfil
              </Link>
            ) : (
              <Link
                to="/perfil"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Seu perfil
              </Link>
            )}
            {user.role === 1 && (
              <Link
                to="/admin"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Admin
              </Link>
            )}
            <Link
              to="/ranking"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Ranking
            </Link>
            <button
              type="button"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75 font-semibold"
              onClick={logoutWrapper}
            >
              Deslogar
            </button>
          </div>
        ) : (
          <div className="child:ml-5 flex flex-col items-center text-slate-700 font-semibold text-sm phone:flex-row">
            <Link
              to="/ranking"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Ranking
            </Link>
            <Link
              to="/usuario/cadastrar"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Usuário
            </Link>
            <Link
              to="/entidade/registro"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Entidade
            </Link>
            <Link
              to="/login"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
