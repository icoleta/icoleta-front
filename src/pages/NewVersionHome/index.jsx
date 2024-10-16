import { Link } from "react-router-dom";

// ASSETS
import pessoas from "../../assets/recicle-icoleta.png";
import { FaClipboardList, FaMapMarkedAlt } from "react-icons/fa";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import icImage from "../../assets/ic.jpg";
import rank from "../../assets/ranking.png";
import alunos from "../../assets/alunos.jpg";
import logo from "../../assets/logo.png"
import Feedback from "../Feedback";
import { useEffect } from "react";

const NewVersionHome = () => {

    return (
        <>
            <div id="introducao" className="flex flex-col-reverse justify-center laptop:flex-row gap-[24px] laptop:gap-[138px] bg-[#4B9093] px-[10%] laptop:px-[150px] py-[42px] ">
                <div className="flex flex-col gap-[12px] justify-center">
                    <h3 className="text-4xl font-bold text-white text-center laptop:text-left">
                        Sua plataforma de coleta de resíduos
                    </h3>
                    <p className="mt-4 text-lg font-normal text-white text-justify">
                        O IColeta é uma plataforma que conecta os pontos de coleta
                        de lixo reciclável com quem quer fazer o descarte correto.
                    </p>
                    <p className="mt-4 text-lg font-normal text-white text-justify" >
                        Ajudamos e incentivamos as pessoas a fazerem o descarte sustentável de uma maneira gamificada.
                    </p>
                    <Link to="/lista-de-pontos">
                        <button className="flex w-full py-4 items-center focus:outline-none text-white bg-[#F59A73] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-base px-5 mr-2 mb-2">
                            <FaClipboardList className="h-5 w-5 mr-2" />
                            Pontos de Coleta
                        </button>
                    </Link>
                    <Link to="/mapa">
                        <button className="flex w-full items-center focus:outline-none text-white bg-[#F59A73] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-4 mr-2 mb-2">
                            <FaMapMarkedAlt className="h-5 w-5 mr-2" />
                            Mapa dos Pontos de Coleta
                        </button>
                    </Link>
                </div>
                <img src={pessoas} alt="Imagem Ilustrativa de Duas Pessoas Fazendo Reciclagem" title="Imagem Ilustrativa de Duas Pessoas Fazendo Reciclagem" />
            </div>

            <div id="carousel" className="flex flex-col gap-[32px] justify-center items-center bg-[#F59A73] px-[10%] laptop:px-[150px] py-[42px]">
                <h3 className="text-4xl font-bold text-white text-center">
                    Resíduos aceitos e o tempo de decomposição
                </h3>

                <CarouselHome />
            </div>

            <div id="sobre-projeto" className="flex flex-col gap-[24px] py-[42px] justify-center items-center bg-white">
                <div className="flex flex-col laptop:flex-row px-[10%] laptop:px-[150px] py-[42px] gap-[90px] items-center">
                    <div className="flex flex-col max-w-[500px]">
                        <h3 className="text-4xl font-bold text-[#4B9093]">
                            Sobre o Projeto
                        </h3>
                        <p className="mt-4 text-lg font-normal text-justify text-[#7C7C8A]" >
                            O projeto surgiu com o intuito de facilitar e incentivar o descarte de materiais recicláveis. Assim, foi desenvolvida uma plataforma que conecta os pontos de coleta de lixo reciclável com quem quer fazer o descarte correto de maneira sustentável e gamificada.
                        </p>
                    </div>
                    <div className="flex">
                        <img src={logo} className="h-full" alt="Logo do IColeta" title="Logo do IColeta" />
                    </div>
                </div>

                <div id="sobre-informacoes" className="flex flex-col laptop:flex-row gap-[12px] px-[10%] laptop:px-[150px] py-[42px]">
                    <div className="flex flex-col justify-between items-center max-w-[442px] border-solid border-[2px] rounded p-[12px] gap-[12px] border-gray-200">
                        <img src={icImage} className="laptop:h-48 tablet:h-36 w-full object-cover object-center" alt="Imagem do Instituto da Computação" title="Imagem do Instituto da Computação" />
                        <h3 className="text-2xl font-bold text-[#0F0F0F]">
                            Instituto de Computação - UFAL
                        </h3>
                        <p className="mt-4 text-lg font-normal text-justify max-w-[350px] text-[#7C7C8A]" >
                            Um projeto de extensão do Instituto de Computação da UFAL. Incentivando a sustentabilidade ambiental e o descarte correto de resíduos recicláveis por meio da tecnologia.
                        </p>
                        <a href="https://www.instagram.com/ic.ufal/" target="_blank" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 font-medium text-[#4B9093] underline">
                            Mais sobre o IC
                        </a>
                    </div>

                    <div className="flex flex-col justify-between items-center max-w-[442px] border-solid border-[2px] rounded p-[12px] gap-[12px] border-gray-200">
                        <img src={alunos} className="laptop:h-48 tablet:h-36 w-full object-cover object-center" alt="Imagem ilustrativa de alunos" title="Imagem ilustrativa de alunos" />
                        <h3 className="text-2xl font-bold text-[#0F0F0F]">
                            Criadores da Plataforma
                        </h3>
                        <p className="mt-4 text-lg font-normal text-justify max-w-[350px] text-[#7C7C8A]" >
                            Iniciando o projeto como orientador o Prof. Ranilson Paiva e como desenvolvedores os alunos de Ciência da Computação, Fernando Lins, Priscila Teodório, Pedro Mateus, Victor Araújo e Jonas Almeida.
                        </p>
                        <a href="#feedback" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 font-medium text-[#4B9093] underline">
                            Entrar em contato
                        </a>
                    </div>

                    <div className="flex flex-col justify-between items-center max-w-[442px] border-solid border-[2px] rounded p-[12px] gap-[12px] border-gray-200">
                        <img src={rank} className="laptop:h-48 tablet:h-36 w-full object-cover object-center" alt="Imagem ilustrativa de podios de ranking" title="Imagem ilustrativa de podios de ranking" />
                        <h3 className="text-2xl font-bold text-[#0F0F0F]">
                            Participar do ranking
                        </h3>
                        <p className="mt-4 text-lg font-normal text-justify max-w-[350px] text-[#7C7C8A]" >
                            Todos podem descartar de maneira anônima nos pontos de coleta, mas para participar do ranking é necessário se cadastrar no sistema e falar com um dos voluntário para pesar e contar os resíduos.
                        </p>
                        <a href="https://www.instagram.com/icoleta_sustentavel/" target="_blank" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 font-medium text-[#4B9093] underline">
                            Falar com um voluntário
                        </a>
                    </div>

                </div>

            </div>

            <div id="feedback" className="flex flex-col border-[2px] mx-[24px] rounded laptop:mx-0 border-solid border-[#F59A73] laptop:px-[150px] py-[42px]">
                <Feedback />
            </div>
        </>
    );
}

export default NewVersionHome;