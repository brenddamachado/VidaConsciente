import React, { useState } from 'react';
import axios from 'axios';
import './LocationModal.css'; 

const LocationModal = ({ location, onClose, fetchLocations }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const [formData, setFormData] = useState({
        name: location?.name || '',
        address: location?.address || '',
        hours: location?.hours || '',
        serviceType: location?.serviceType || '',
        latitude: location?.latitude || '',
        longitude: location?.longitude || '',
    });

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/locations/${location.id}`);
            fetchLocations(); 
            onClose(); 
        } catch (error) {
            console.error("Erro ao excluir o local:", error);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/locations/${location.id}`, formData);
            fetchLocations(); 
            setIsEditMode(false); 
        } catch (error) {
            console.error("Erro ao editar o local:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    if (!location) {
        return null; 
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                {!isEditMode ? (
                    <div>
                        <h2>Informações do Local</h2>
                        <p><strong>Nome:</strong> {location.name}</p>
                        <p><strong>Endereço:</strong> {location.address}</p>
                        <p><strong>Horário:</strong> {location.hours}</p>
                        <p><strong>Serviço:</strong> {location.serviceType}</p>
                        <p><strong>Latitude:</strong> {location.latitude}</p>
                        <p><strong>Longitude:</strong> {location.longitude}</p>

                        <button onClick={() => setIsEditMode(true)}>Editar</button>
                        <button onClick={handleDelete}>Excluir</button>
                    </div>
                ) : (
                    <form onSubmit={handleEdit}>
                        <h2>Editar Local</h2>
                        <div>
                            <label>Nome:</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label>Endereço:</label>
                            <input 
                                type="text" 
                                name="address" 
                                value={formData.address} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label>Horário:</label>
                            <input 
                                type="text" 
                                name="hours" 
                                value={formData.hours} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label>Serviço:</label>
                            <input 
                                type="text" 
                                name="serviceType" 
                                value={formData.serviceType} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label>Latitude:</label>
                            <input 
                                type="number" 
                                name="latitude" 
                                value={formData.latitude} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label>Longitude:</label>
                            <input 
                                type="number" 
                                name="longitude" 
                                value={formData.longitude} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={() => setIsEditMode(false)}>Cancelar</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LocationModal;
