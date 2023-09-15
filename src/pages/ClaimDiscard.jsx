import React, {useEffect, useState} from "react";
import pointApi from "../services/api/points";
import {useNavigate, useParams} from "react-router-dom";
import useForm from "../hooks/useForm";
import discardApi from "../services/api/discards";

function ClaimDiscard() {
  const navigate = useNavigate();
  const {token} = useParams();

  const [residuums, setResiduums] = useState([]);
  const [points, setPoints] = useState([]);
  const [selectedResiduum, setSelectedResiduum] = useState([]);
  const [selectedPointId, setSelectedPointId] = useState(-1);

  const [email, setEmail] = useState("");
  let payload = {
    weight: null,
    point_id: null,
    residuum_id: null,
    email: null,
  };

  // const {values, errors, handleChange, handleSubmit} = useForm(whenSubmitted, [
  //   "email",
  //   "weight",
  //   "point_id",
  //   "residuum_id",
  // ]);

  useEffect(() => {
    pointApi.fetchPoints().then((res) => {
      setPoints(res.data);
      parseJwt(token);
    });
  }, []);

  useEffect(() => {
    if (points) {
      const pointIndex = points.findIndex(
        (point) => point.id === parseInt(selectedPointId)
      );
      if (pointIndex !== -1) {
        setResiduums(points[pointIndex].collectable_items);
      } else {
        setResiduums([]);
      }
    }
  }, [points, selectedPointId]);

  async function handleSubmit() {
    await discardApi.createDiscardAsUser({...payload, email});
    alert("Descarte criado");
    navigate("/");
  }

  // async function whenSubmitted() {
  //   console.log(values);

  //   let payload = {
  //     email: values["email"],
  //     weight: parseInt(values["weight"]),
  //     point_id: parseInt(selectedPointId),
  //     residuum_id: parseInt(selectedResiduum),
  //   };

  //   await discardApi.createDiscardAsUser(payload);
  //   alert("Descarte criado");
  //   navigate("/");
  // }

  function parseJwt(token) {
    console.log(token)
    
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    console.log(jsonPayload)

    const {weight, point_id, residuum_id, email} = JSON.parse(jsonPayload);
    
    document.querySelector("#weight").value = weight;
    document.querySelector(`#point-${point_id}`)?.setAttribute("selected", "");
    document
      .querySelector(`#residuum-${residuum_id}`)
      ?.setAttribute("selected", "");
    setSelectedPointId(point_id);
    setSelectedResiduum(residuum_id);
    document.querySelector('#email').value = email

    payload.weight = weight;
    payload.point_id = point_id;
    payload.residuum_id = residuum_id;
  }

  return (
    <div className="m-32">
      <form
        className="w-full bg-white rounded-lg shadow-md p-6"
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
                onChange={(e) => setEmail(e.target.value)}
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
                required
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2">
                Ponto de coleta
                <select className="block w-full mt-2 bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none">
                  <option value="">Selecione um ponto</option>
                  {points &&
                    points.map((item) => (
                      <option
                        id={`point-${item.id}`}
                        key={item.id}
                        className="block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mx-auto -mb-6 pb-1 mt-2">
            <span className="text-center text-xl text-gray-700">
              Tipo de resíduo
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-full my-6">
            {residuums &&
              residuums.map((residuum, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`residuum-${residuum.id}`}
                    className="my-2"
                    value={residuum.id}
                    checked={residuum.id === selectedResiduum}
                  />
                  <label htmlFor={`residuum-${residuum.id}`}>
                    {residuum.name}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full md:w-full px-3 mb-6">
          <button
            type="submit"
            className="appearance-none block justify-center w-full bg-olive-green hover:bg-olive-green-dark text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClaimDiscard;
