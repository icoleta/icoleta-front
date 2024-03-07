import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


function Footer() {
  return (
    <div className="bg-almost-white px-1 tablet:px-32 py-8 flex flex-col text-center justify-center items-center">


      <div className="flex justify-center items-center flex-col gap-[12px]">
        <span>
          <a className="text-olive-green  hover:text-olive-green-dark" title="Instagram do IColeta" href="https://www.instagram.com/icoleta_sustentavel/" target="_blank" rel="noreferrer" >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

        </span>
        <div className="flex">

          <ScrollLink to="sobre-projeto" className="text-center hover:text-olive-green cursor-pointer">Sobre o projeto</ScrollLink>
          &nbsp;
          <span>|</span>
          <ScrollLink to="feedback" className="ml-1 text-center hover:text-olive-green cursor-pointer">Enviar feedback</ScrollLink>
        </div>
      </div>

      <div className="text-sm text-blueGray-500 py-1">
        Copyright © <span>2022</span><a href="https://www.instagram.com/icoleta_sustentavel/" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noreferrer" /> IColeta - Todos os direitos reservados

      </div>
    </div>
  );
}

export default Footer;
