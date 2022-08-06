import React from "react";
import { FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import pessoas from "../assets/pessoas-icoleta.png";


function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-12 w-3/5">
        <div className="flex space-x-24 mb-24 ">
          <div className="w-2/4">
            <h3 className="text-4xl font-bold text-gray-900">
            Seu marketplace de coleta de resíduos
            </h3>
            <p className="mt-4 text-lg font-normal text-gray-800">
              O Icoleta é uma plataforma que conecta quem tem pontos de coleta
              de lixo reciclável e quem precisa fazer o descarte correto.
            </p>
            <p className="mt-4 text-lg font-normal text-gray-800" >
              Ajudamos e incentivamos pessoas a fazer o descarte correto de maneira eficiente e gamificada.
            </p>
          </div>

          <div>
            <Link to="/lista-de-pontos">
              <button className="flex w-full items-center focus:outline-none text-white bg-olive-green hover:bg-olive-green-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
                <FaClipboardList className="h-5 w-5 mr-2" />
                Pontos de coleta mais próximos
              </button>
            </Link>
            <Link to="/mapa">
              <button className="flex w-full items-center focus:outline-none text-white bg-olive-green hover:bg-olive-green-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
                <FaMapMarkedAlt className="h-5 w-5 mr-2" />
                Mapa dos pontos de coleta
              </button>
            </Link>
          </div>
          
        </div>

        {/* <img src={pessoas}  alt="plant" class="h-auto " /> */}

        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Resíduos que recolhemos
        </h3>

        <div class="flex flex-row ">

          <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
              <p class="text-medium mb-5 text-gray-700">Produtos que recolhemos</p>
              <button class="w-full rounded-md bg-sunset-orange  py-2 text-white  bg-sunset-orange hover:bg-sunset-orange-dark duration-75">Pilhas e Baterias</button>
            </div>
          </div>

          <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
              <p class="text-medium mb-5 text-gray-700">Produtos que recolhemos</p>
              <button class="w-full rounded-md  bg-sunset-orange py-2 text-white  bg-sunset-orange hover:bg-sunset-orange-dark duration-75">Metais</button>
            </div>
          </div>

          <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
              <p class="text-medium mb-5 text-gray-700">Produtos que recolhemos</p>
              <button class="w-full rounded-md  bg-sunset-orange py-2 text-white bg-sunset-orange hover:bg-sunset-orange-dark duration-75">Papeis e Plasticos</button>
            </div>
          </div>
          
          <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
              <p class="text-medium mb-5 text-gray-700">Produtos que recolhemos</p>
              <button class="w-full rounded-md  bg-sunset-orange  py-2 text-white hbg-sunset-orange hover:bg-sunset-orange-dark duration-75">Vidros</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
