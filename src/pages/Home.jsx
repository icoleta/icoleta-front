import React from "react";
import { FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-12 w-3/5">
        <div className="flex space-x-24 mb-24">
          <div className="w-2/4">
            <h3 className="text-4xl font-bold text-gray-900">
              Encontre os melhores pontos para descarte sustentável de lixo
            </h3>
            <p className="mt-4 text-lg font-normal text-gray-800">
              O Icoleta é uma plataforma que conecta quem tem pontos de coleta
              de lixo reciclável de quem precisa fazer o descarte correto
            </p>
          </div>
          <div>
            <Link to="/lista-de-pontos">
              <button className="flex w-full items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
                <FaClipboardList className="h-5 w-5 mr-2" />
                Pontos de coleta mais próximos
              </button>
            </Link>
            <Link to="/mapa">
              <button className="flex w-full items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
                <FaMapMarkedAlt className="h-5 w-5 mr-2" />
                Mapa dos pontos de coleta
              </button>
            </Link>
          </div>
        </div>
        <p></p>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
