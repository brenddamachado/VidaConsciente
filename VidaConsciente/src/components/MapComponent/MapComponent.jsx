import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IoEye } from 'react-icons/io5'; 
import axios from 'axios';
import L from 'leaflet';
import LocationModal from '../LocationModal/LocationModal';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };
    fetchLocations();
  }, []);

  const handleOpenModal = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null); 
  };

  return (
    <div>
      <MapContainer center={[-14.235, -51.9253]} zoom={4} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker key={location.id} position={[location.latitude, location.longitude]}>
            <Popup>
              <strong>{location.name}</strong><br />
              {location.address}<br />
              {location.hours}<br />
              {location.serviceType}<br />
              <IoEye 
                onClick={() => handleOpenModal(location)}
                style={{ cursor: 'pointer', marginTop: '10px' }}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {isModalOpen && selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={handleCloseModal}
          fetchLocations={() => {
            axios.get('http://localhost:3000/locations')
              .then((response) => setLocations(response.data))
              .catch((error) => console.error('Erro ao atualizar os locais:', error));
          }}
        />
      )}
    </div>
  );
};

export default MapComponent;
