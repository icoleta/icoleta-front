import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import recycleIcon from "../assets/recycle_icon.svg";
import points from "../data/points.json";

const mapIcon = L.icon({
  iconUrl: recycleIcon,
  iconSize: [24, 24],
  popupAnchor: [0, -12],
});

function Home() {
  const [position, setPosition] = useState([
    -9.576503756696837, -35.75611430266957,
  ]);
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

      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-olive-green rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start inicial">

            <Map position={position} width="100%" height="100%">
              {showPositionMarker && <Marker position={position}></Marker>}
              {points.map((item) => {
                return (
                  <Marker
                    key={item.id}
                    icon={mapIcon}
                    position={[item.location.latitude, item.location.longitude]}
                  >
                    <Popup>{item.title}</Popup>
                  </Marker>
                );
              })}
            </Map>

           
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Encontre o ponto de descarte mais próximo</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Com o IColeta você pode encontrar o ponto de descarte mais próximo com apenas um clique</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">CEP</label>
              <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Bairro</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Tipo de Resíduo</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>


            <button class="text-white bg-sunset-orange border-0 py-2 px-6 focus:outline-none hover:bg-sunset-orange-dark rounded text-lg">Buscar</button>
          </div>
        </div>


      


    </div>
      
  );
}

export default Home;
