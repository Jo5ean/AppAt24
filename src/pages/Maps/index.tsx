import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [sliderValue, setSliderValue] = useState(0);
    const navigate = useNavigate(); // Hook para redirección

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

    const handleSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(event.target.value));
        if (event.target.value === '100') {
            navigate('/confirmation');
        }
    };

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

            {/* Floating Button */}
            <div className="absolute bottom-4 bg-[#3E3F3D] flex flex-col items-center justify-center w-full">
                <h1 className='text-sm font-bold mt-2'>	&iquest;NECESITAS AUXILIO?</h1>
                <div className="p-2 rounded shadow-md flex items-center space-x-2">
                    <div className="relative flex items-center w-64 h-12 bg-[#3AAA35] rounded-full shadow-inner">
                        <div
                            className="absolute left-0 h-full flex items-center justify-center w-12 bg-white rounded-full shadow-md cursor-pointer transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(${sliderValue}%)` }}
                        >
                            <svg className="w-6 h-6 text-[#3AAA35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                            onChange={handleSlide}
                        />
                        <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                            Desliza para confirmar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maps;
