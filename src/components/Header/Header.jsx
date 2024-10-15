import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png";

import "../../pages/CadastroEntidade/style.css";

import { UseToggle } from "../../hooks/useToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";



function Header() {
  const { signed, user, Logout } = useAuth();
  const location = useLocation();
  const [toggle, onToggle] = UseToggle()

  const navigate = useNavigate();

  async function logoutWrapper() {
    await Logout();
    navigate("/");
  }

  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');

    if (toggle){
      document.body.classList.add('overflow-hidden');

    }else{
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-x-hidden');
    };

  }, [toggle])

  function handleLinkClick(event){
    console.log(event.target)
    if (event.target !== event.currentTarget && toggle)
      onToggle()
  }

  return (
    <>
      {/*dark bkg*/}
      <div  className={`${!toggle ? 'invisible' : 'visible'}  absolute  duration-100 ease-out transition-all z-10 w-full h-screen	bg-gray-900 opacity-50  `}></div>

      <div  className=" z-10 relative bg-white	w-full flex  items-center px-8 py-[12px] justify-between tablet:flex-col laptop:flex-row tablet:px-[10%] shadow-md ">
        <Link to="/" className="transition ease-in-out delay-150 hover:scale-105 duration-300">
          <img src={logoHeader} className="h-[3rem] w-[10rem] tablet:h-[60px] tablet:w-[100%] grow" alt="Logo do IColeta" title="Logo do IColeta" />
        </Link>
        
        <button className = {`tablet:hidden`} onClick={() => onToggle()}>
          {toggle ? <IoMdClose className="w-8 h-8"/> 
          : <GiHamburgerMenu className="w-6 h-6"/>
          }
        </button>

        <div className={`right-0 ${!toggle && 'translate-x-full'}  bg-white top-[4.6rem] pt-[1rem] h-screen w-[15rem] absolute z-10  px-[8px]  tablet:py-0 tablet:static tablet:h-auto tablet:w-auto tablet:translate-x-0  duration-300 ease-out transition-all`}>
          <navbar onClick = {onToggle} className="laptop:child:ml-4 flex flex-col mt-4 px-4 gap-[12px] items-end justify-center tablet:flex-row tablet:mt-0 tablet:px-0 tablet:items-center text-slate-700 font-semibold text-sm ">

            {signed ? (
              <>
                {user.role !== "admin" && user.role !== "company" && (
                  <Link
                    to="/perfil"
                    className="rounded-md bg-sunset-orange py-2  mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                  >
                    Dashboard
                  </Link>
                )}
                {user.role === "company" && (
                  <Link
                    to="/entidade/admin"
                    className="rounded-md bg-sunset-orange py-2  mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                  >
                    Dashboard
                  </Link>
                )}
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="rounded-md bg-sunset-orange py-2  mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                  >
                    Admin
                  </Link>
                )}
                <Link
                  to="/ranking"
                  className="rounded-md bg-sunset-orange py-2  mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                >
                  Ranking
                </Link>
                <button
                  type="button"
                  className="rounded-md bg-sunset-orange py-2  mb-2 text-white hover:bg-sunset-orange-dark duration-75 font-semibold"
                  onClick={logoutWrapper}
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/#sobre-projeto"
                  className="rounded-md cursor-pointer py-2  text-sunset-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-[18px]"
                >
                  Sobre
                </Link>

                <Link
                  to="/ranking"
                  className="rounded-md py-2  text-sunset-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-[18px]"
                >
                  Classificações
                </Link>

                {location.pathname !== "/usuario/cadastrar" && (
                  <Link
                    to="/usuario/cadastrar"
                    className="rounded-md py-2  text-sunset-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-[18px]"
                  >
                    Cadastre-se
                  </Link>
                )}

                {location.pathname === "/usuario/cadastrar" && (
                  <Link
                    to="/entidade/registro"
                    className="border border-sunset-orange text-sunset-orange rounded-md py-2 px-6 hover:bg-sunset-orange-dark  hover:text-white duration-75 rounded-t block whitespace-no-wrap"
                  >
                    Cadastro Entidade
                  </Link>
                )}
                <Link
                  to="/login"
                  className="rounded-md bg-sunset-orange py-2 px-6 text-white transition ease-in-out delay-150 hover:scale-105 duration-300 text-[18px] hover:opacity-90"
                >
                  Entrar
                </Link>
              </>
            )}
            
          </navbar>
        </div>

      </div>

    </>
  );
}

export default Header;
