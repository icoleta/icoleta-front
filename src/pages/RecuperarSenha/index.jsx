import React, { useState } from 'react'
import { api } from '../../services/api'

const RecuperarSenha = () => {
  const [email, setEmail] = useState('')

  function handleEmailChange(e) {
    const value = e.target.value
    setEmail(value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await api.post('/send-reset-email', {
      email,
    })
    alert('Link para atualização de senha enviado por email')
  }
  
  return (
    <div className="flex justify-center items-center h-4/6 flex-col">
      <form onSubmit={handleSubmit}>
        <p className="text-lg mb-4">Recuperar senha</p>

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
          onChange={handleEmailChange}
        />
        <br></br>
        
        <div className="btn-flex-login">
          <button 
            type="submit"
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Enviar email
          </button>
        </div>

      </form>
    </div>
  )
}

export default RecuperarSenha