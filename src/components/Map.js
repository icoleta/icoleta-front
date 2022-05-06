import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function Map({ children, width, height, position, interactive=true, ...props }) {

  return (
    <MapContainer
      center={position} 
      zoom={15} 
      style={{ width: width, height: height }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
    {...props}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView coords={position} />
      {children}
    </MapContainer>
  );
}

export default Map;
