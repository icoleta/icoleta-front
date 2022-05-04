import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { Marker } from "react-leaflet";

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
      </Map>
    </Flex>
  );
}

export default Home;
