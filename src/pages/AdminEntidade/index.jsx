import React from 'react'

import './style.css'

import imaSede from '../../assets/ima-sede.jpeg'
import logo from '../../assets/logo-ima.png'
import { useEffect } from 'react'

import pointApi from "./../../services/api/points";
import { useState } from 'react'

const AdminEntidade = () => {
  const [points, setPoints] = useState([])

  useEffect(() => {
    getCompanyPoints()
  }, [])
  
  async function getCompanyPoints() {
    return pointApi.fetchCompanyPoints()
    .then(res => {
      setPoints(res.data)
    })
  }
  
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
              {
                points.map(point => {
                  console.log(point)
                  return ''
                })
              }
              {
                points.map((point, index) => (
                  <div key={index} class="container-ponto">
                    <div class="ponto-img">
                      <img src={imaSede} alt=""></img>
                    </div>
                    <div class="container-ponto-descricao">
                      <h4>{point.name}</h4>
                      <div class="itens-coletados">
                        {
                          point.collectable_items.map((item, index) => {
                            if(index == point.collectable_items.length -1) {
                              return (
                                <small>{item.name}</small>
                              )
                            } else {
                              return (
                                <>
                                  <small>{item.name}</small>
                                  <span> - </span>
                                </>
                              )
                            }
                          })
                        }
                      </div>
      
                      <br></br>
      
                      <p class="obs-horario-ponto">
                        {point.hours}
                      </p>
                    </div>
                  </div>
                ))
              }
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
