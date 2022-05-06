import { Flex } from "@chakra-ui/react";
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
  const [ position, setPosition ] = useState([-9.576503756696837, -35.75611430266957]);
  const [ showPositionMarker, setShowPositionMarker ] = useState(false);

  useEffect(() => {
    if(navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
    else console.log("Geolocation is not supported by this browser.");
  }, []);

  function showPosition(position) {
    setPosition([position.coords.latitude, position.coords.longitude]);
    setShowPositionMarker(true);
  }

  return (
    <Flex align='center' justify='center'>
      <Map position={position} height='500px' width='700px'>
        {showPositionMarker &&
          (<Marker position={position}></Marker>)
        }
        {
          points.map((item) => {
            return (
              <Marker key={item.id} icon={mapIcon} position={[item.location.latitude, item.location.longitude]}>
                <Popup>
                  {item.title}
                </Popup>
              </Marker>
            )
          })
        }
      </Map>
    </Flex>
  );
}

export default Home;
