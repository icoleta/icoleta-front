import React, { useState, useEffect, Confirm } from "react";

import residuumApi from "./../../services/api/residuum";

function Residuum() {
  const [residuum, setResiduum] = useState([])
  const [deletedItem, setDeletedItem] = useState(false)

  useEffect(() => {
    getResiduum()
  }, [])

  async function getResiduum() {
    residuumApi.fetchResiduums()
    .then(res => {
        setResiduum(res.data)
    })
  }

  async function handleRemoveResiduum(residuumId) {
    await residuumApi.deleteResiduum(residuumId)
    setDeletedItem(!deletedItem)
  }
  
  return (
    <div className="col-span-4 items-center">
      <div className="text-center mt-12  mb-6">
          <h2 className="text-4xl tracking-tight">Resíduos coletados</h2>
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
                    Nome do resíduo
                  </th>
                  {/* <th scope="col" className="py-3 px-6">
                    Editar
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    Excluir
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  residuum.map(item => (
                    <tr key={`residuum-${item.id}`} className="bg-white border-b">
                      <th
                        scope="row"
                        className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                      >
                        {item.id}
                      </th>
                      <td className="py-4 px-6 text-gray-700 font-semibold">
                        {item.name}
                      </td>
                      {/* <td className="py-4 px-6">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-pencil"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                          </svg>
                        </button>
                      </td> */}
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleRemoveResiduum(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trash"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
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
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

  );
}

export default Residuum;
