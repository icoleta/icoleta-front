import React from 'react'

import './style.css'

import imaSede from '../../assets/ima-sede.jpeg'
import logo from '../../assets/logo-ufal.png'
import { useEffect } from 'react'

import pointApi from "./../../services/api/points";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

const AdminEntidade = () => {
  const [points, setPoints] = useState([])
  const { user } = useAuth()

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
        <div className="flex justify-center my-12 container-md">
          <div className="container-entidade">
            <div className="logo-entidade">
              <img src={logo} alt=""></img>
            </div>
            <h3 className="text-xl">{user.name ?? ''}</h3>

            <div className="flex justify-center my-2">
              <Link to='/ponto/criar' className="appearance-none block w-fit bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500">Novo ponto</Link>
            </div>
          </div>

          <div className="container-pontos">
            <div className="text-4xl tracking-tight">Seus Pontos de Coleta</div>

            <div className="container-ponto flex flex-col">
              {
                points.map((point, index) => (
                  <div key={'point_'+index} className="container-ponto border border-slate-300 rounded-md">
                    <div className="ponto-img">
                      <img src={process.env.REACT_APP_BACKEND_URL + point.path} alt="Imagem do ponto"></img> 
                    </div>
                    <div className="container-ponto-descricao py-2">
                      <h4 className="text-lg">{point.name}</h4>
                      <div className="itens-coletados">
                        {
                          point.collectable_items.map((item, itemIndex) => {
                            if(itemIndex == point.collectable_items.length -1) {
                              return (
                                <small key={`point_${index}_item_${itemIndex}`}>{item.name}</small>
                              )
                            } else {
                              return (
                                <small key={`point_${index}_item_${itemIndex}`}>{item.name}
                                  <span> - </span>
                                </small>
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
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminEntidade
