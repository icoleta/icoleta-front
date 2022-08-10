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
  const [residuums, setResiduums] = useState([]);
  const [items, setItems] = useState(new Array(5).fill(false));
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["name", "hours"]
  );

  useEffect(() => {
    getResiduums();
  }, []);

  async function getResiduums() {
    residuumApi.fetchResiduums().then((res) => {
      let temp = [];
      res.data.forEach((element, index) => {
        temp.push(false);
      });
      setItems(temp);
      setResiduums(res.data);
    });
  }

  async function whenSubmitted() {
    //await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    let items_res = "";
    residuums.map((element, index) => {
      if (items[index]) items_res = items_res.concat(" - ", element.name);
    });
    let temp = { ...values, items: items_res };
    await pointApi.createPoint(temp);
    alert("Ponto criado");
    navigate("/");
  }

  function handleChecked(index) {
    let temp = items;
    temp[index] = !temp[index];
    setItems([...temp]);
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

        <div className="text-center my-4">
          <h1 className="font-bold">Resíduos disponíveis</h1>
          {residuums.map((residuum, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={residuum.name}
                name={residuum.name}
                value={residuum.name}
                checked={items[index]}
                onChange={() => handleChecked(index)}
              />
              <label for={residuum.name}>{residuum.name}</label>
            </div>
          ))}
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
