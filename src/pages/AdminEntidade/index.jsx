import React from 'react'

import './style.css'

import imaSede from '../../assets/ima-sede.jpeg'
import logo from '../../assets/logo-ima.png'

const AdminEntidade = () => {
  return (
    <>
      <main class="main-admin">
        <div class="main-admin-container container-md">
          <div class="container-entidade">
            <div class="logo-entidade">
              <img src={logo} alt=""></img>
            </div>
            <h3 class="h5">IMA/AL</h3>
          </div>

          <div class="container-pontos">
            <h2>Seus pontos de coleta</h2>

            <div class="container-ponto">
              <div class="ponto-img">
                <img src={imaSede} alt=""></img>
              </div>
              <div class="container-ponto-descricao">
                <h4>Sede do IMA Alagoas</h4>
                <div class="itens-coletados">
                  <small>Óleo de cozinha</small>
                  <span> - </span>
                  <small>Pilhas e Baterias</small>
                  <span> - </span>
                  <small>Baterias de Celular</small>
                </div>

                <br></br>

                <p class="obs-horario-ponto">
                  Aberto de Segunda a Sexta das 7h as 13h
                </p>
              </div>
            </div>

            <div class="container-ponto">
              <div class="ponto-img">
                <img src={imaSede} alt=""></img>
              </div>
              <div class="container-ponto-descricao">
                <h4>Sede do IMA Alagoas</h4>
                <div class="itens-coletados">
                  <small>Óleo de cozinha</small>
                  <span> - </span>
                  <small>Pilhas e Baterias</small>
                  <span> - </span>
                  <small>Baterias de Celular</small>
                </div>

                <br></br>

                <p class="obs-horario-ponto">
                  Aberto de Segunda a Sexta das 7h as 13h
                </p>
              </div>
            </div>

            <div>
              <button class="btn primary-button">Novo ponto</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminEntidade
