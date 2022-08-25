import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import recycleIcon from "../assets/recycle_icon.svg";
import points from "../data/points.json";
import icImage from "../assets/ic.jpg";

const mapIcon = L.icon({
  iconUrl: recycleIcon,
  iconSize: [24, 24],
  popupAnchor: [0, -12],
});

function Home() {
  const [position, setPosition] = useState([-9.553288, -35.776893]);
  const [showPositionMarker, setShowPositionMarker] = useState(false);

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(showPosition);
    else console.log("Geolocation is not supported by this browser.");
  }, []);

  function showPosition(position) {
    setPosition([position.coords.latitude, position.coords.longitude]);
    setShowPositionMarker(true);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto flex tablet:flex-nowrap tablet:w-full flex-wrap">
        <div className="desktop:w-2/3 tablet:w-1/2 bg-olive-green rounded-lg overflow-hidden phone:mr-10 p-8 laptop:p-12 flex items-end justify-start inicial">
          <Map position={position} height="500px" width="700px">
            {showPositionMarker && <Marker position={position}></Marker>}
            {points.map((item) => {
              return (
                <Marker
                  key={item.id}
                  icon={mapIcon}
                  position={[item.location.latitude, item.location.longitude]}
                >
                  <Popup>
                    {item.title}
                    <img src={icImage} />
                  </Popup>
                </Marker>
              );
            })}
          </Map>
        </div>
        {/*
        <div className="desktop:w-1/3 tablet:w-1/2 bg-white flex flex-col tablet:ml-auto w-full tablet:py-8 mt-8 tablet:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Encontre o ponto de descarte mais próximo
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Com o IColeta você pode encontrar o ponto de descarte mais próximo
            com apenas um clique
          </p>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              CEP
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Bairro
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">
              Tipo de Resíduo
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          <button className="text-white bg-sunset-orange border-0 py-2 px-6 focus:outline-none hover:bg-sunset-orange-dark rounded text-lg">
            Buscar
          </button>
        </div>
          */}
      </div>
    </div>
  );
}

export default Home;
