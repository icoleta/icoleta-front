import React from "react";
import pessoas from "../assets/recicle-icoleta.png";
import icImage from "../assets/ic.jpg";
import rank from "../assets/ranking.png";
import alunos from "../assets/alunos.jpg";
import { Link } from "react-router-dom";

function About() {
    return (
        <section class="text-gray-600 body-font">



  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
        <div class="h-1 bg-almost-white rounded overflow-hidden">
            <div class="w-24 h-full bg-sunset-orange"></div>
        </div>
        <div class="flex flex-wrap phone:flex-row flex-col py-6 mb-12">
            <h1 class="phone:w-2/5 text-olive-green font-medium title-font text-2xl mb-2 phone:mb-0">Sobre o projeto </h1>
            <p class="phone:w-3/5 leading-relaxed text-base text-black-500 phone:pl-10 pl-0">O projeto surgiu com o intuito de facilitar e incentivar o descarte de materiais recicláveis. 
            Assim, foi desenvolvida uma plataforma que conecta os pontos de coleta
            de lixo reciclável com quem quer fazer o descarte correto de maneira sustentável e gamificada.</p>
        </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 tablet:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={icImage} alt="blog" />
          <div class="p-6">
            
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Instituto de Computação - UFAL</h1>
            <p class="leading-relaxed mb-3">Um projeto de Extensão do Instituto de Computação da UFAL. Incentivando a sustentabilidade ambiental e o descarte correto de resíduos recicláveis por meio da tecnologia.</p>
            <div class="flex justify-end items-center flex-wrap">
              <a class="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" href="https://www.instagram.com/ic.ufal/" >Mais sobre o IC
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 tablet:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={alunos} alt="blog" />
          <div class="p-6">
            
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Criadores da plataforma</h1>
            <p class="leading-relaxed mb-3">Iniciando o projeto como orientador o Prof. Ranilson Paiva e como desenvolvedores os alunos de Ciência da Computação, Fernando Lins, Priscila Teodório, Pedro Mateus, Victor Araújo e Jonas Almeida.</p>
            <div class="flex justify-end items-center flex-wrap">
              <Link class="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" to="/feedback" >Entrar em contato
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 tablet:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="laptop:h-48 tablet:h-36 w-full object-cover object-center" src={rank} alt="blog" />
          <div class="p-6">
            
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Participar do ranking</h1>
            <p class="leading-relaxed mb-3">Todos podem descartar de maneira anônima nos pontos de coleta, mas para participar do ranking é necessário se cadastrar no sistema e falar com um dos voluntário para pesar e contar os resíduos.</p>
            <div class="flex justify-end items-center flex-wrap">
              <a class="text-olive-green inline-flex items-center tablet:mb-2 laptop:mb-0" href="https://www.instagram.com/icoleta_sustentavel/" >Falar com um voluntário
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
