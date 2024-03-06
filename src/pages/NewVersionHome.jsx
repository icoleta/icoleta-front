import { Link } from "react-router-dom";

// COMPONENTS

// ASSETS
import pessoas from "../assets/recicle-icoleta.png";
import ic from "../assets/ic.png";
import plataforma from "../assets/platfmor.png";
import ranking from "../assets/rankings.png";
import { FaClipboardList, FaMapMarkedAlt } from "react-icons/fa";
import CarouselHome from "../components/CarouselHome/CarouselHome";
import queijadinha from "../assets/queijadinha.png"
import logo from "../assets/logo.png"
import Feedback from "./Feedback";

const NewVersionHome = () => {
    return (
        <div className="flex flex-col m-0 mx-auto max-w-[1440px]">
            <div id="section-one" className="flex gap-[138px] bg-[#4B9093] px-[150px] py-[70px]">
                <div className="flex flex-col gap-[12px] justify-center">
                    <h3 className="text-4xl font-bold text-white">
                        Sua plataforma de coleta de resíduos
                    </h3>
                    <p className="mt-4 text-lg font-normal text-white">
                        O IColeta é uma plataforma que conecta os pontos de coleta
                        de lixo reciclável com quem quer fazer o descarte correto.
                    </p>
                    <p className="mt-4 text-lg font-normal text-white" >
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
                <img src={pessoas} alt="" />
            </div>

            <div id="section-two" className="flex flex-col gap-[32px] justify-center items-center bg-[#F59A73] px-[127px] py-[53px]">
                <h3 className="text-4xl font-bold text-white">
                    Resíduos aceitos e o tempo de decomposição
                </h3>

                <CarouselHome />
            </div>

            <div id="section-three" className="flex flex-col gap-[40px] py-[49px] items-center bg-[#4B9093]">
                <h3 className="text-4xl font-bold text-white">
                    Top Contribuidores do IColeta
                </h3>

                <div className="flex gap-[12px]">
                    <div className="flex relative flex-col w-[400px] h-[350px] mt-[50px] justify-center items-center bg-white rounded">
                        <p className="mt-4 text-4xl absolute right-[24px] top-[12px] font-bold text-[#4b9093]" >
                            2°
                        </p>
                        <img src={queijadinha} alt="" />
                        <div className="flex flex-col gap-[12px] w-full items-center">
                            <h3 className="text-4xl font-bold text-[#4B9093]">
                                João Queijadinha
                            </h3>
                            <div className="border-solid border-[1px] border-gray-300 w-full"></div>
                            <h3 className="text-4xl font-bold text-[#4B9093]">
                                1300 Kg
                            </h3>
                        </div>
                    </div>
                    <div className="flex relative flex-col w-[400px] h-[400px] bg-white justify-center items-center rounded">
                        <p className="mt-4 text-4xl absolute right-[24px] top-[12px] font-bold text-[#4b9093]" >
                            1°
                        </p>
                        <img src={queijadinha} alt="" />
                        <div className="flex flex-col gap-[12px] w-full items-center">
                            <h3 className="text-4xl font-bold text-[#4B9093]">
                                João Queijadinha
                            </h3>
                            <div className="border-solid border-[1px] border-gray-300 w-full"></div>
                            <h3 className="text-4xl font-bold text-[#4B9093]">
                                1300 Kg
                            </h3>
                        </div>
                    </div>
                    <div className="flex relative flex-col w-[400px] h-[300px] mt-[100px] bg-white justify-center items-center rounded">
                        <p className="mt-4 text-4xl absolute right-[24px] top-[12px] font-bold text-[#4b9093]" >
                            1°
                        </p>
                        <img src={queijadinha} alt="" />
                        <div className="flex flex-col gap-[12px] w-full items-center">
                            <h3 className="text-4xl font-bold text-[#4B9093]">
                                João Queijadinha
                            </h3>
                            <div className="border-solid border-[1px] border-gray-300 w-full"></div>
                            <h3 className="text-4xl font-bold text-[#4B9093]">
                                1300 Kg
                            </h3>
                        </div>
                    </div>

                </div>

                <Link to="/ranking">
                    <button className="flex w-full items-center focus:outline-none text-white bg-[#F59A73] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-4 mb-2">
                        Mais Detalhes
                    </button>
                </Link>

            </div>

            <div id="section-four" className="flex flex-col gap-[24px] py-[52px] justify-center items-center bg-white">
                <div className="flex gap-[90px] items-center">
                    <div className="flex flex-col max-w-[500px]">
                        <h3 className="text-4xl font-bold text-[#4B9093]">
                            Sobre o Projeto
                        </h3>
                        <p className="mt-4 text-lg font-normal text-justify text-[#7C7C8A]" >
                            O projeto surgiu com o intuito de facilitar e incentivar o descarte de materiais recicláveis. Assim, foi desenvolvida uma plataforma que conecta os pontos de coleta de lixo reciclável com quem quer fazer o descarte correto de maneira sustentável e gamificada.
                        </p>
                    </div>
                    <img src={logo} alt="" />
                </div>

                <div className="flex gap-[12px]">
                    <div className="flex flex-col justify-between items-center max-w-[442px] border-solid border-[2px] rounded p-[12px] gap-[12px] border-gray-200">
                        <img src={ic} alt="" />
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
                        <img src={plataforma} alt="" />
                        <h3 className="text-2xl font-bold text-[#0F0F0F]">
                            Criadores da Plataforma
                        </h3>
                        <p className="mt-4 text-lg font-normal text-justify max-w-[350px] text-[#7C7C8A]" >
                            Iniciando o projeto como orientador o Prof. Ranilson Paiva e como desenvolvedores os alunos de Ciência da Computação, Fernando Lins, Priscila Teodório, Pedro Mateus, Victor Araújo e Jonas Almeida.
                        </p>
                        <a href="#section-five" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 font-medium text-[#4B9093] underline">
                            Entrar em contato
                        </a>
                    </div>

                    <div className="flex flex-col justify-between items-center max-w-[442px] border-solid border-[2px] rounded p-[12px] gap-[12px] border-gray-200">
                        <img src={ranking} alt="" />
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

            <div id="section-five" className="flex flex-col border-[2px] border-solid border-[#F59A73]">
                <div className="bg-[#F59A73] flex flex-col py-[34px] justify-center items-center">
                    <h3 className="text-4xl font-bold text-white">
                        Contato
                    </h3>
                    <p className="mt-4 text-lg font-normal text-center text-white max-w-[864px]">
                        Você pode entrar em contato conosco através do e-mail ou instagram.
                        Além disso, pode nos enviar um feedback. Esta é a primeira versão do sistema, então contamos com seu feedback para melhorar sua experiêcia no sistema.
                    </p>
                </div>

                <Feedback />
            </div>
        </div>
    );
}

export default NewVersionHome;