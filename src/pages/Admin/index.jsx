import React from 'react'
import './style.css'

const AdminEntidade = () => {
  return (
    <>
      <main class="main-admin">
        <div class="main-admin-container container-md">
          <div class="container-entidade">
            <div class="logo-entidade">
              <img class="border-b  w-8 mx-2 " src="/static/media/recycle_icon.2fb95d3372a9538a18df3a05b0ac0b9f.svg"></img>
              <h3 class="h5">Área do Admin</h3>
            </div>
          </div>

        </div>

        <div class="container flex justify-center">
            <div class="flex flex-col">
                <div class="w-full">
                    <div class="border-b border-gray-200 shadow">
                        <table>
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        ID
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Nome do ponto
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Entidade Responsável
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Status
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Editar
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Deletar
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Jon doe
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">jhondoe@example.com</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        2021-1-12
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="px-4 py-1 text-sm text-white  bg-green-600 rounded">Editar</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Deletar</a>
                                    </td>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Jon doe
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">jhondoe@example.com</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        2021-1-12
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="px-4 py-1 text-sm text-white  bg-green-600 rounded">Editar</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Deletar</a>
                                    </td>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Jon doe
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">jhondoe@example.com</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        2021-1-12
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="px-4 py-1 text-sm text-white bg-green-600 rounded">Editar</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Deletar</a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>

      </main>
    </>
  )
}

export default AdminEntidade
