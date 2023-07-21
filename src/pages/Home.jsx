import React from "react";
import { FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import pessoas from "../assets/recicle-icoleta.png";
import papel from "../assets/papel.jpg";
import metal from "../assets/metal.jpg";
import pilha from "../assets/pilha.jpg";
import plastico from "../assets/plastico1.jpg";
import vidro from "../assets/vidro.jpg";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-12 tablet:w-3/5 w-4/5">
        <div className="flex mb-4 flex-col tablet:flex-row ">
          <div className="w-4/4 tablet:w-3/4  ">
            <h3 className="text-4xl font-bold text-gray-900">
              Sua plataforma de coleta de resíduos
            </h3>
            <p className="mt-4 text-lg font-normal text-gray-800">
              O IColeta é uma plataforma que conecta os pontos de coleta
              de lixo reciclável com quem quer fazer o descarte correto.
            </p>
            <p className="mt-4 text-lg font-normal text-gray-800" >
              Ajudamos e incentivamos as pessoas a fazerem o descarte sustentável de uma maneira gamificada.
            </p>

            <div className="pt-12" >
              <Link to="/lista-de-pontos">
                <button className="flex w-full items-center focus:outline-none text-white bg-olive-green hover:bg-olive-green-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
                  <FaClipboardList className="h-5 w-5 mr-2" />
                  Pontos de Coleta
                </button>
              </Link>
              <Link to="/mapa">
                <button className="flex w-full items-center focus:outline-none text-white bg-olive-green hover:bg-olive-green-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
                  <FaMapMarkedAlt className="h-5 w-5 mr-2" />
                  Mapa dos Pontos de Coleta
                </button>
              </Link>
            </div>

          </div>
          <img src={pessoas} alt="plant" className="h-auto " />

        </div>


        <h3 className="text-4xl font-bold text-gray-900 mb-8 mt-8">
          Tempo de decomposição de resíduos recicláveis
        </h3>

        <div className="grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-4 mb-10">

          <div className="mb-4 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src={papel}  alt="plant" className="h-auto w-[1900px]" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">De 3 a 6 meses</p>
              <button className="w-full rounded-md  bg-sunset-orange  py-2 text-white hbg-sunset-orange hover:bg-sunset-orange-dark duration-75">Papéis</button>
            </div>
          </div>
          
          <div className="mb-4 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src={metal} alt="plant" className="h-auto w-[1900px]" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Mais de 100 anos</p>
              <button className="w-full rounded-md  bg-sunset-orange py-2 text-white  bg-sunset-orange hover:bg-sunset-orange-dark duration-75">Metais</button>
            </div>
          </div>

          <div className="mb-4 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src={plastico} alt="plant" className="h-auto w-[1900px]" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Mais de 400 anos  </p>
              <button className="w-full rounded-md  bg-sunset-orange py-2 text-white bg-sunset-orange hover:bg-sunset-orange-dark duration-75">Plásticos</button>
            </div>
          </div>
          
          <div className="mb-4 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src={vidro}  alt="plant" className="h-auto w-[1900px]" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Mais de 1000 anos</p>
              <button className="w-full rounded-md  bg-sunset-orange  py-2 text-white hbg-sunset-orange hover:bg-sunset-orange-dark duration-75">Vidros</button>
            </div>
          </div>

          {/* <div className="mb-4 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            <img src={pilha} alt="plant" className="h-auto w-[1900px] " />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Substâncias tóxicas</p>
              <button className="w-full rounded-md bg-sunset-orange  py-2 text-white  bg-sunset-orange hover:bg-sunset-orange-dark duration-75">Pilhas</button>
            </div>
          </div> */}
          
        </div>

        <h3 className="text-4xl font-bold text-gray-900 mb-8 mt-8">
          A relevância do correto descarte de resíduos
        </h3>

        <p className="mb-5 text-lg font-normal text-gray-800">Garantir o descarte adequado do lixo é de extrema importância para evitar que materiais como plástico e vidro permaneçam no meio ambiente, causando danos às diferentes espécies. Por isso, é essencial que tenhamos consciência ecológica e repensemos nossos hábitos de consumo.</p>

        <p className="mb-10 text-lg font-normal text-gray-800">É fundamental encaminhar tudo o que pode ser reciclado para o devido processo, destacando a importância da separação correta dos materiais recicláveis, como plástico, papel, vidro e metal, para que possam ser reutilizados adequadamente.</p>

      </div>
    </div>
  );
}

export default Home;
