import React from "react";
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux';
import CustomMarker from '../marker/Marker';
import data from '../../locations.json';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const startLocation = [52.019, 19.392]    
    const groupedLocations = Object.groupBy(data.locations, ({ DzidaId }) => DzidaId)
    const theme = useSelector((state) => state.theme.value)

    return (
        <div>
            <MapContainer center={startLocation} zoom={6} scrollWheelZoom={true}>
                {theme === 'dark' && <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                />}
                {theme === 'light' && <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />}
                {Object.values(groupedLocations).map((locations, index) => (
                    <React.Fragment key={index}>
                        {locations.map(location => (
                            <CustomMarker key={location.Id} location={location} />
                        ))}
                        <Polyline
                            positions={locations.map(location => (
                                [location.Lat, location.Lng]
                            ))}
                            color="blue"
                        />
                    </React.Fragment>
                ))}
            </MapContainer>
        </div>
    );
}