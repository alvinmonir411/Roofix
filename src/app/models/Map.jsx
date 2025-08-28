"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { divIcon } from "leaflet";
import ReactDOMServer from "react-dom/server";

const dhakaPosition = [23.7806, 90.2794];

export default function Map() {
  const iconHTML = ReactDOMServer.renderToString(
    <MapPin color="red" size={32} />
  );

  const customIcon = divIcon({
    html: iconHTML,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <MapContainer
      center={dhakaPosition}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={dhakaPosition} icon={customIcon}>
        <Popup>Your Office Location in Dhaka</Popup>
      </Marker>
    </MapContainer>
  );
}
