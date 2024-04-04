import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import locations from '../locations.json';
import { Icon } from 'leaflet';

const stoneIcon = new Icon({
    iconUrl: require('../comment_stone.png'),
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
})

export default function Map() {
  return (
    <div>
      <MapContainer center={[52.019, 19.392]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.locations.map(location => (
            <Marker
                key={location.Id}
                position={[location.Lat, location.Lng]}
                icon={stoneIcon}>
                <Popup>
                    <h1><a href={location.Url} target="_blank" rel="noreferrer">{location.Name}</a></h1>
                    <p>{location.Descr}</p>
                </Popup>
            </Marker>
        ))}
        <Polyline
            positions={locations.locations.map(location => [
            location.Lat,
            location.Lng
            ])}
            color="blue"
        />
        </MapContainer>
    </div>
  );
}