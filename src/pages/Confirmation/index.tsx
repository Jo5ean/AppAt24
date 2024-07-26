import React, { useState } from 'react';

const Confirmation: React.FC = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [destinationLocation, setDestinationLocation] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí podrías manejar la lógica de confirmación
        console.log('Pickup Location:', pickupLocation);
        console.log('Destination Location:', destinationLocation);
        // Redirigir o mostrar un mensaje de confirmación
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Confirmar Ubicaciones</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label>
                    Ubicación de Recogida:
                    <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="border p-2 rounded"
                    />
                </label>
                <label>
                    Ubicación de Destino:
                    <input
                        type="text"
                        value={destinationLocation}
                        onChange={(e) => setDestinationLocation(e.target.value)}
                        className="border p-2 rounded"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Confirmar
                </button>
            </form>
        </div>
    );
};

export default Confirmation;
