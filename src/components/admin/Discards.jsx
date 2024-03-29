import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import pointApi from "./../../services/api/points";
import discardApi from "./../../services/api/discards";

function Discards() {
  const navigate = useNavigate();
  const [residuums, setResiduums] = useState([]);
  const [points, setPoints] = useState([]);
  const [selectedResiduum, setSelectedResiduum] = useState([]);
  const [selectedPointId, setSelectedPointId] = useState(-1);
  const [discards, setDiscards] = useState([])
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["email", "weight", "point_id", "residuum_id"]
  );

  useEffect(() => {
    discardApi.fetchDiscards().then(res => {
      setDiscards(res.data)
    })

    pointApi.fetchPoints().then((res) => {
      setPoints(res.data);
    });
  }, [])

  useEffect(() => {
    if(points) {
      const pointIndex = points.findIndex(point => point.id === parseInt(selectedPointId))
      if(pointIndex !== -1) {
        setResiduums(points[pointIndex].collectable_items)
      } else {
        setResiduums([])
      }
    }
  }, [points, selectedPointId]);

  async function whenSubmitted() {
    let payload = {
      email: values['email'],
      weight: parseInt(values["weight"]),
      point_id: parseInt(selectedPointId),
      residuum_id: parseInt(selectedResiduum),
    };

    await discardApi.createDiscard(payload);
    alert("Descarte criado");
    navigate("/");
  }

  return (
    <div className="col-span-4 items-center">
      <div>
        <div className="text-center mt-8">
          <h2 className="text-4xl tracking-tight">Cadastrar descarte do usuário</h2>
        </div>
        <div className="flex justify-center my-2 mx-4 md:mx-0">
          <form
            className="w-full  bg-white rounded-lg shadow-md p-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="flex flex-col tablet:flex-row w-full">
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2"
                    htmlFor="email"
                  >
                    Email do usuário
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2"
                    htmlFor="weight"
                  >
                    Peso do resíduo (g)
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="number"
                    max="10000"
                    id="weight"
                    name="weight"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2">
                    Ponto de coleta
                    <select
                      className="block w-full mt-2 bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      onInput={(e) => {
                        setSelectedPointId(e.target.value)
                        handleChange({
                          target: {
                            name: 'point_id',
                            value: e.target.value
                          }
                        })
                      }}
                    >
                      <option value="">Selecione um ponto</option>
                      {
                        points && points.map((item) => (
                          <option
                            className="block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                            value={item.id}
                          >
                            {item.name}
                          </option>
                        ))
                      }
                    </select>
                  </label>
                </div>
              </div>

              <div className="mx-auto -mb-6 pb-1 mt-2">
                <span className="text-center text-xl text-gray-700">
                  Tipo de resíduo
                </span>
              </div>
              <div className="flex flex-col tablet:flex-row items-center w-full my-6">
                {
                  residuums && residuums.map((residuum, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={residuum.name + "_" + residuum.id}
                        value={residuum.id}
                        checked={
                          residuum.id == selectedResiduum
                        }
                        onChange={(e) => {
                          setSelectedResiduum(e.target.value)
                          handleChange({
                            target: {
                              name: 'residuum_id',
                              value: e.target.value
                            }
                          })
                        }}
                      />
                      <label htmlFor={residuum.name + "_" + residuum.id}>
                        {residuum.name}
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block justify-center w-full bg-olive-green hover:bg-olive-green-dark text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-12  mb-6">
          <h2 className="text-4xl tracking-tight">Histórico de descartes</h2>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ID
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Nome do usuário
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Quantidade doada{" "}
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Material doado
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ponto de coleta
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Editar
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Excluir
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                    discards.map(discard => (
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-sunset-orange">1</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {discard.person.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {discard.weight}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {discard.residuum.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {discard.point.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                          </svg>
                        </button>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trash"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
        </div>
      </div>
    </div>
  );
}

export default Discards;
