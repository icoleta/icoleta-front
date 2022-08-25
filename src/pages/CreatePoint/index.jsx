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
    let items_res = [];
    residuums.map((element, index) => {
      if (items[index]) items_res.push(element.id);
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
    <div className="m-8">
      <div className="text-center mt-8">
        <h2 className="text-4xl tracking-tight">Cadastro do ponto de coleta</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <fieldset className="font-semibold my-2 text-lg text-center">
            Dados do ponto
          </fieldset>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Nome
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                errors={errors}
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="hours"
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
          <fieldset className="font-semibold my-2 text-lg text-center">
            Resíduos disponíveis
          </fieldset>
          
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
              <label htmlFor={residuum.name}>{residuum.name}</label>
            </div>
          ))}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Criar ponto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePoint;
