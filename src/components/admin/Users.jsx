import React, { useState, useEffect } from "react";

import personApi from "./../../services/api/person";

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])
  
  async function getUsers() {
    return personApi.fetchUsers()
    .then(res => {
      setUsers(res.data)
    })
  }

  return (
    <div class="col-span-4 items-center">
      <div class="text-center mt-12  mb-6">
          <h2 class="text-4xl tracking-tight">Usuários cadastrados no sistema</h2>
        </div>

        <div className="flex flex-col justify-center">
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nome do usuário
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Tornar voluntário
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Excluir
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => (
                    <tr  className="bg-white">
                      <th
                        scope="row"
                        className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                      >
                        {user.id}
                      </th>
                      <td className="py-4 px-6 text-gray-700 font-semibold">
                        {user.name}
                      </td>
                      <td className="py-4 px-6">
                        <label for="volunteer-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                          <input type="checkbox" value="" id="volunteer-toggle" class="sr-only peer" />
                          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:sunset-orange dark:peer-focus:sunset-orange-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sunset-orange"></div>
                          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Voluntário</span>
                        </label>
                      </td>
                      <td className="py-4 px-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <line x1="4" y1="7" x2="20" y2="7"></line>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Users;
