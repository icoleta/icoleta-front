import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from './../../services/api'

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const { name, cpf, email, password } = formData
    await api.post('/registerUser', {
      name,
      cpf,
      email,
      password
    })
    alert('Usuário criado')
    navigate('/')
  }
  
  return (
      <div className="flex justify-center items-center h-5/6 flex-col">
        <form onSubmit={handleSubmit} className="w-1/6">
          <p className="text-lg mb-4">Cadastro de usuário</p>

          <label 
            htmlFor="cpf"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            CPF:
          </label>
          <input 
            type="text" 
            id="cpf" 
            name="cpf"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block  w-full p-2.5"
            onChange={handleInputChange}
          />
          <br></br>

          <label 
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nome:
          </label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block  w-full p-2.5"
            onChange={handleInputChange}
          />
          <br></br>

          <label 
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block  w-full p-2.5"
            onChange={handleInputChange}
          />
          <br></br>

          <label 
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Senha:
          </label>
          <input 
            type="password" 
            id="password" 
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block  w-full p-2.5"
            onChange={handleInputChange}
          />
          <br></br>

          <button 
            type="submit" 
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" 
          >
            Criar conta de usuário
          </button>
        </form>
    </div>
  )
}

export default CadastroUsuario
