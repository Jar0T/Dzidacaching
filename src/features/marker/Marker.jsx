import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

export default function CustomMarker({location}) {
    const stoneIcon = new Icon({
        iconUrl: require('../../comment_stone.png'),
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
    })

    return (
        <Marker
            position={[location.Lat, location.Lng]}
            icon={stoneIcon}>
            <Popup>
                <h1><a href={location.Url} target="_blank" rel="noreferrer">{location.Name}</a></h1>
                <p>{location.Descr}</p>
                <p>Id kamienia: {location.DzidaId}</p>
            </Popup>
        </Marker>
    );
}