import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";
import pointApi from "./../../services/api/points";
import { useParams } from "react-router";

import residuumApi from "./../../services/api/residuum";
import "./style.css";

const EditPoint = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [residuums, setResiduums] = useState([]);
  const [items, setItems] = useState(new Array(5).fill(false));
  const [image, setImage] = useState();
  const [imagesPreview, setImagesPreview] = useState([]);

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
    let items_res = [];
    residuums.map((element, index) => {
      if (items[index]) items_res.push(element.id);
    });

    const data = new FormData();
    data.append("name", values.name);
    data.append("hours", values.hours);
    data.append("image", image);

    items_res.forEach((item, index) => {
      data.append(`items[${index}]`, item);
    });

    await pointApi.editPoint(params.id, data);
    navigate("/entidade/admin?toast=true&type=success&message=");
  }

  function handleChecked(index) {
    let temp = items;
    temp[index] = !temp[index];
    setItems([...temp]);
  }

  function handleSelectImages(e) {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);

    setImage(selectedImages[0]);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setImagesPreview(selectedImagesPreview);
  }

  return (
    <div className="m-8">
      <div className="text-center mt-8">
        <h2 className="text-4xl tracking-tight">Editar ponto de coleta</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <legend className="font-semibold my-2 text-lg text-center">
            Dados do ponto
          </legend>

          <div className="flex flex-wrap -mx-3 mb-5">
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

            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="imagens"
              >
                Imagem do ponto
              </label>

              <div className="grid gap-4 grid-cols-5">
                {imagesPreview.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt="Prévia da imagem"
                    className="w-[96px] h-[96px] object-cover rounded-2xl"
                  />
                ))}

                <label
                  htmlFor="imagem"
                  className="w-[96px] h-[96px] my-2 flex justify-center items-center p-2 text-2xl text-olive-green bg-almost-white border border-olive-green border-dashed rounded-2xl cursor-pointer"
                >
                  <div>+</div>
                </label>
              </div>
              <input
                onChange={handleSelectImages}
                type="file"
                name="imagem"
                id="imagem"
                className="hidden"
              />
            </div>
          </div>

          <legend className="font-semibold my-2 text-lg text-center">
            Resíduos disponíveis
          </legend>

          <div className="my-5 flex justify-center">
            <div>
              {residuums.map((residuum, index) => (
                <div key={index} className="mx-auto">
                  <input
                    type="checkbox"
                    className="my-2"
                    id={residuum.name}
                    name={residuum.name}
                    value={residuum.name}
                    checked={items[index]}
                    onChange={() => handleChecked(index)}
                  />
                  <label htmlFor={residuum.name} className="ml-2 text-lg">
                    {residuum.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Salvar ponto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPoint;
