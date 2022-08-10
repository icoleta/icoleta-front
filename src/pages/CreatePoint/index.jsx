import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";
import axios from "axios";
import pointApi from "./../../services/api/points";

import residuumApi from "./../../services/api/residuum";
import "./style.css";


const CreatePoint = () => {
  const navigate = useNavigate();
  const [residuums, setResiduums] = useState([])
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["name", "items", "hours"]
  );

  useEffect(() => {
    getResiduums()
  }, [])

  async function getResiduums() {
    residuumApi.fetchResiduums()
    .then(res => {
      setResiduums(res.data)
    })
  }

  async function whenSubmitted() {
    console.log(values);
    //await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    await pointApi.createPoint(values);
    alert("Ponto criado");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <p className="text-lg text-center mb-4">Cadastro do ponto de coleta</p>

        <div className="mb-2 flex flex-col justify-center items-center">
          <fieldset className="font-semibold my-2">Dados</fieldset>
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
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

        <div className="text-center">
          <h1 className="font-bold">Resíduos disponíveis</h1>
          {
            residuums.map(residuum => <p>{residuum.name}</p>)
          }
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
