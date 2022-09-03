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
      <main className="main-admin">
        <div className="main-admin-container container-md">
          <div className="container-entidade">
            <div className="logo-entidade">
              <img src={logo} alt=""></img>
            </div>
            <h3 className="h5">UFAL - Universidade Federal de Alagoas</h3>
          </div>

          <div className="container-pontos">
            <div className="text-4xl tracking-tight">Seus pontos de coleta</div>

            <div className="container-ponto">
              {
                points.map(point => {
                  console.log(point)
                  return ''
                })
              }
              {
                points.map((point, index) => (
                  <div key={index} className="container-ponto">
                    <div className="ponto-img">
                      <img src={imaSede} alt=""></img>
                    </div>
                    <div className="container-ponto-descricao">
                      <h4>{point.name}</h4>
                      <div className="itens-coletados">
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
      
                      <p className="obs-horario-ponto">
                        {point.hours}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div> 

            <div>
              <Link to='/ponto/criar' className="appearance-none block w-fit bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500">Novo ponto</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminEntidade
