import React from 'react'

import './style.css'

import imaSede from '../../assets/ima-sede.jpeg'
import logo from '../../assets/logo-ufal.png'
import { useEffect } from 'react'

import pointApi from "./../../services/api/points";
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
            <h3 class="h5">UFAL - Universidade Federal de Alagoas</h3>
          </div>

          <div class="container-pontos">
            <div class="text-4xl tracking-tight">Seus pontos de coleta</div>

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
              <Link to='/ponto/criar' class="appearance-none block w-fit bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500">Novo ponto</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminEntidade
