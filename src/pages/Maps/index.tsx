import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './styles.css'; // Importa el archivo CSS

// Corrige el problema con los iconos de los marcadores de Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Maps: React.FC = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition([position.coords.latitude, position.coords.longitude]);
                console.log("User's location:", position.coords.latitude, position.coords.longitude, position.coords);
            },
            (error) => {
                console.error("Error getting user's location", error);
            }
        );
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen relative">
            <h1 className="text-white py-4 text-center text-2xl z-10">Maps</h1>
            {position ? (
                <MapContainer center={position} zoom={13} style={{ height: "90%", width: "100%", zIndex: 0 }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Estás aquí.
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Cargando ubicación...</p>
            )}
            <button type="button" className="button">
                <div className="button-top">3D Button</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
        </div>
    );
}

export default Maps;
