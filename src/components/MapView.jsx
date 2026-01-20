import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { usePoints } from "../hooks/usePoints";
import LocateButton from "./LocateButton";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function MapView() {
  const { points, loading } = usePoints();

  if (loading) return <p>Cargando puntos...</p>;

  return (
    <MapContainer
      center={[28.5, -13.8]}
      zoom={8}
      style={{ height: "100%", width: "100%" }}
    >

        <LocateButton />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {points.map(p => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={icon}>
          <Popup>{p.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
