import React from 'react'
import './style.css'

const AdminEntidade = () => {
  return (
    <>
    <main class="main-admin">

        <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">

            <div class="h-96 col-span-4  bg-olive-green rounded-md flex items-center">
                <div class="ml-20 mr-20">
                    <h2 class="text-white text-4xl">IColeta</h2>
                    <p class="text-indigo-100 mt-4 font-thin tracking-wider leading-7">Alguma frase motivacional para quem estiver cuidando do projeto 
                    não se esquecer do objetivo principal que é ajudar e incentivar a sustentabilidade, aprender e aperfeiçoar os conhecimentos em desenvolvimento web, 
                    estar sempre melhorando o visual e a gamificação do app para que os usuários se sintam motivados, incluidos e bem informados sobre a coleta de 
                    resíduos perigosos e reciclaveis para se sentirem instigados a proteger a natureza.</p>

                    <a href="#" class="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">Algo</a>
                </div>
            </div>

            <div class="h-96 col-span-1 ">
                <div class="bg-white py-3 px-4 mb-4 rounded-lg flex justify-around items-center ">
                    <input type="text" placeholder="Buscar" class=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                </div>

                <div class="bg-white  rounded-md">
                    <h1 class="text-center text-xl bg-white py-2 rounded-md border-b-2 cursor-pointer  text-olive-green">Área do ADMIN</h1>
                    <div class="bg-white rounded-md list-none  text-center ">
                        <li class="py-3 rounded-lg border-b-2 hover:bg-sunset-orange"><a href="#" class="list-none">Lista de usuários</a></li>
                        <li class="py-3 rounded-lg border-b-2 hover:bg-sunset-orange"><a href="#" class="list-none">Lista de Coletas</a></li>
                        <li class="py-3 rounded-lg border-b-2 hover:bg-sunset-orange"><a href="#" class="list-none">Lista de entidade</a></li>
                        <li class="py-3 rounded-lg hover:bg-sunset-orange"><a href="#" class="list-none">Lista de ponto</a></li>
                    </div>
                </div>
            </div>
        </div>

    </main>
    </>
  )
}

export default AdminEntidade
