import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-almost-white px-1 tablet:px-32 py-8 flex flex-col text-center justify-center items-center">

      <div className="flex justify-center tablet:flex-row">
        <Link to="/feedback" className="text-center hover:text-olive-green ">Enviar feedback</Link>
        <span className="inline-flex">
                            
          <a className="ml-4 text-olive-green  hover:text-olive-green-dark " href="https://www.instagram.com/icoleta_sustentavel/" target="_blank" >
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
          </a>
            
        </span>
      </div>

      <div class="text-sm text-blueGray-500 py-1 ">
          Copyright © <span>2022</span><a href="https://www.instagram.com/icoleta_sustentavel/" class="text-blueGray-500 hover:text-gray-800" target="_blank" /> IColeta - Todos os direitos reservados
         
        </div>
    </div>
  );
}

export default Footer;
