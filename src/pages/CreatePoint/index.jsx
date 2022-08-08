import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";
import axios from "axios";
import pointApi from "./../../services/api/points";

import "./style.css";

const CreatePoint = () => {
  const [cities, setCities] = useState([]);
  const selectedUF = "AL";

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/distritos`
      )
      .then((res) => res.data)
      .then((data) => {
        const orderedCities = data
          .map((city) => city.nome)
          .sort((a, b) => a.localeCompare(b));
        setCities(orderedCities);
      });
  }, []);

  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["items", "hours", "state", "city"]
  );

  async function whenSubmitted() {
    console.log(values);
    //await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    await pointApi.createPoint(values);
    alert("Ponto criada");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <p className="text-lg text-center mb-4">Cadastro do ponto de coleta</p>

        <div>
          <fieldset className="font-semibold my-2">Dados</fieldset>
          <div className="flex mb-2">
            <div className="mr-4 w-1/2">
              <label
                htmlFor="items"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Itens
              </label>
              <Input
                type="text"
                id="items"
                name="items"
                onChange={handleChange}
                errors={errors}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="hours"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Horários de atendimento
              </label>
              <Input
                type="text"
                id="hours"
                name="hours"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          </div>
        </div>

        <fieldset className="font-semibold my-2">Endereço</fieldset>
        <div className="flex my-2">
          <div className="mr-4 w-1/2">
            <label htmlFor="state">Estado</label>
            <select
              name="state"
              id="state"
              value={selectedUF}
              onChange={handleChange}
            >
              <option value="0">{selectedUF}</option>
            </select>
          </div>

          <div className="mr-4 w-1/2">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city" onChange={handleChange}>
              <option value="0">Selecione uma cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div class="btn-flex">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            value="Submit"
          >
            Criar ponto
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePoint;
