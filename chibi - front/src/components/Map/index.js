import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import bubbletea from '../../assets/icons/bubbletea-cursor.png';
import L from 'leaflet';

const Map = () => {
    const chibiIcon = L.icon({
        iconUrl: `${bubbletea}`,
        iconSize:     [400, 200], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });

    return (
        <MapContainer
            center={[48.8588897, 2.320041]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.8588897, 2.320041]} icon={chibiIcon}>
                <Popup>CHIBI - CAFE</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;