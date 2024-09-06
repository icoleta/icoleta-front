import React from "react";
import icImage from "../../assets/ic.jpg";
import rank from "../../assets/ranking.png";
import alunos from "../../assets/alunos.jpg";
import lixeira from "../../assets/lixeira-wifi.jpg";
import instagram from "../../assets/insta.jpg";
import { Link } from "react-router-dom";

function About() {
    return (
        <section className="text-gray-600 body-font">



  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
        <div className="h-1 bg-almost-white rounded overflow-hidden">
            <div className="w-24 h-full bg-sunset-orange"></div>
        </div>
        <div className="flex flex-wrap phone:flex-row flex-col py-6 mb-12">
            <h1 className="phone:w-2/5 text-olive-green font-medium title-font text-2xl mb-2 phone:mb-0">Sobre o Projeto </h1>
            <p className="phone:w-3/5 leading-relaxed text-base text-black-500 phone:pl-10 pl-0">O sistema surgiu com o intuito de facilitar e 
            incentivar o descarte de materiais recicláveis. 
            Assim, foi desenvolvida uma plataforma que conecta os pontos de coleta
            de lixo reciclável com quem quer fazer o descarte correto de maneira sustentável e gamificada por meio de uma lixeira inteligente, também desenvolvida por nós.</p>
        </div>
    </div>
    <div className="flex flex-wrap -m-4">

    
      
      <div className="p-4 tablet:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={alunos} alt="blog" />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Criadores da plataforma</h1>
            <p className="leading-relaxed mb-3">Iniciando o projeto como mentor o Prof. Ranilson Paiva e 
            como desenvolvedores os alunos de Ciência da Computação, Fernando Lins, Priscila Teodório e Pedro Mateus.</p>
            <div className="flex justify-end items-center flex-wrap">
              <Link className="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" to="/feedback" >Entrar em contato
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 tablet:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={lixeira} alt="blog" />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">A lixeira inteligente</h1>
            <p className="leading-relaxed mb-3">Todos os resíduos serão pesados e contabilizados automaticamente pelo sistema integrado à lixeira inteligente que
            foi desenvolvida com a cooperação com os alunos de Engenharia da computação que fazem parte do IEEE | RAS.</p>
            <div className="flex justify-end items-center flex-wrap">
              <Link className="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" to="https://www.instagram.com/ieeeras.ufal/" >Mais sobre o RAS
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 tablet:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={rank} alt="blog" />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Participar do ranking</h1>
            <p className="leading-relaxed mb-3">Todos podem descartar de maneira anônima nos pontos de coleta, mas para participar do ranking é necessário se cadastrar 
            no sistema e ler o QRCode mostrado na lixeira para que as informações dos resíduos que você descartou sejam adicionados a sua conta.</p>
            <div className="flex justify-end items-center flex-wrap">
              <a className="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" href="/usuario/cadastrar" >Se cadastrar
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 tablet:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={icImage} alt="blog" />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Instituto de Computação - UFAL</h1>
            <p className="leading-relaxed mb-3">Um projeto idealizado e desenvolvido por alunos e professores do Instituto de Computação da UFAL. Incentivando a sustentabilidade ambiental e o descarte correto de resíduos recicláveis por meio da tecnologia.</p>
            <div className="flex justify-end items-center flex-wrap">
              <a className="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" href="https://www.instagram.com/ic.ufal/" >Mais sobre o IC
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 tablet:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={instagram} alt="blog" />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Novidades sobre o projeto</h1>
            <p className="leading-relaxed mb-3">Por nossa conta no Instagram compartilhamos todas as novidades sobre o projeto, sobre o sistema, sobre o ranking e tudo mais.</p>
            <div className="flex justify-end items-center flex-wrap">
              <a className="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" href="https://www.instagram.com/icoleta_sustentavel/" >Seguir
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      
      </div>
  </div>
</section>
  );
}

export default About;
