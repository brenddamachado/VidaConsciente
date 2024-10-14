import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import { 
  DiseaseCarouselContainer, 
  Card, 
  CardTitle, 
  CardText, 
  CardIcons, 
  CustomSlickStyles, 
  modalStyles, 
  ModalForm 
} from './DiseaseCards.style.js';

function DiseaseCarousel() {
  const [diseases, setDiseases] = useState([]);
  const [isMasterUser, setIsMasterUser] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatedDiseaseData, setUpdatedDiseaseData] = useState({});

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsMasterUser(userEmail === 'master@example.com');

    axios.get('http://localhost:3000/searchAll')
      .then(response => {
        setDiseases(response.data.AllDisease);
      })
      .catch(error => {
        console.error('Erro ao buscar as doenças:', error);
      });
  }, []);

  const openEditModal = (disease) => {
    setSelectedDisease(disease);
    setUpdatedDiseaseData(disease);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedDisease(null);
    setModalIsOpen(false);
  };

  const handleEditSave = () => {
    axios.put(`http://localhost:3000/diseases/${selectedDisease.idDisease}`, updatedDiseaseData)
      .then(response => {
        if (response.status === 200) {
          setDiseases(prev => prev.map(disease => disease.idDisease === selectedDisease.idDisease ? updatedDiseaseData : disease));
          closeModal();
        } else {
          console.error('Erro ao editar a doença:', response);
        }
      })
      .catch(error => {
        console.error('Erro ao editar a doença:', error);
      });
  };

  const handleDelete = (idDisease) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir esta doença?" );
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/diseases/${idDisease}`)
        .then(response => {
          if (response.status === 200) {
            setDiseases(prev => prev.filter(disease => disease.idDisease !== idDisease));
          } else {
            console.error('Erro ao deletar a doença:', response);
          }
        })
        .catch(error => {
          console.error('Erro ao deletar a doença:', error);
        });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <CustomSlickStyles>
        <DiseaseCarouselContainer>
          <Slider {...settings}>
            {diseases.map((disease) => (
              <Card key={disease.idDisease}>
                <CardTitle>{disease.name}</CardTitle>
                <CardText><strong>Sintomas:</strong> {disease.symptoms.join(', ')}</CardText>
                <CardText><strong>Transmissão:</strong> {disease.transmission.join(', ')}</CardText>
                <CardText><strong>Prevenção:</strong> {disease.prevention.join(', ')}</CardText>

                {isMasterUser && (
                  <CardIcons>
                    <FaEdit className="edit-icon" onClick={() => openEditModal(disease)} />
                    <FaTrash className="delete-icon" onClick={() => handleDelete(disease.idDisease)} />
                  </CardIcons>
                )}
              </Card>
            ))}
          </Slider>
        </DiseaseCarouselContainer>

        {selectedDisease && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
          >
            <h2>Editando Doença: {selectedDisease.name}</h2>
            <ModalForm>
              <label>Nome:</label>
              <input
                type="text"
                value={updatedDiseaseData.name}
                onChange={(e) => setUpdatedDiseaseData({ ...updatedDiseaseData, name: e.target.value })}
              />
              <label>Sintomas:</label>
              <input
                type="text"
                value={updatedDiseaseData.symptoms.join(', ')}
                onChange={(e) => setUpdatedDiseaseData({ ...updatedDiseaseData, symptoms: e.target.value.split(', ') })}
              />
              <label>Transmissão:</label>
              <input
                type="text"
                value={updatedDiseaseData.transmission.join(', ')}
                onChange={(e) => setUpdatedDiseaseData({ ...updatedDiseaseData, transmission: e.target.value.split(', ') })}
              />
              <label>Prevenção:</label>
              <input
                type="text"
                value={updatedDiseaseData.prevention.join(', ')}
                onChange={(e) => setUpdatedDiseaseData({ ...updatedDiseaseData, prevention: e.target.value.split(', ') })}
              />
              <button type="button" onClick={handleEditSave}>Salvar</button>
              <button type="button" onClick={closeModal}>Cancelar</button>
            </ModalForm>
          </Modal>
        )}
      </CustomSlickStyles>
    </>
  );
}

export default DiseaseCarousel;
