import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import SelfCareReminders from "../../components/SelfCareReminders/SelfCareReminders";
import { 
  DashboardContainer, 
  Reminders, 
  DashboardSecondGrid, 
  DropdownContainer, 
  Select, 
  Option, 
  ChartsContainer, 
  ChartBox, 
  ChartBoxHeading, 
  AppContainer, 
  AppHeading, 
  LeafletContainer, 
  MapContainerStyled,
  EyeIcon 
} from "./Dashboard.style.js";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { IoEye, IoPencil, IoTrash } from "react-icons/io5";
import MapContainer from "../../components/MapComponent/MapComponent";
import Modal from "../../components/modal/modal";

const diseaseOptions = ["HIV", "Sífilis", "Gonorreia", "Clamídia", "Herpes Genital"];

const Dashboard = () => {
  const [disease, setDisease] = useState("HIV");
  const [isMasterUser, setIsMasterUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [casesData, setCasesData] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [updatedCaseData, setUpdatedCaseData] = useState({});
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isLocationEditModalOpen, setIsLocationEditModalOpen] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setIsMasterUser(userEmail === "master@example.com");

    fetchChartData();
    fetchLocations();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/searchAllCases");
      setCasesData(response.data.Allcases);
    } catch (error) {
      setError("Erro ao buscar os casos");
      console.error("Erro ao buscar os casos:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get("http://localhost:3000/locations");
      setLocations(response.data);
    } catch (error) {
      console.error("Erro ao buscar locais de testagem:", error);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEdit = (id) => {
    const caseToEdit = casesData.find((item) => item.idCase === id);
    setSelectedCase(caseToEdit);
    setUpdatedCaseData(caseToEdit);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedCase(null);
  };

  const handleYearChange = (year, value) => {
    setUpdatedCaseData((prevData) => ({
      ...prevData,
      casesByYear: {
        ...prevData.casesByYear,
        [year]: value,
      },
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:3000/updateCase/${selectedCase.idCase}`, updatedCaseData);
      alert("Caso atualizado com sucesso!");
      setShowEditModal(false);
      fetchChartData();
    } catch (error) {
      console.error("Erro ao atualizar o caso:", error);
      alert("Erro ao atualizar o caso.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este caso?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/eraseCase/${id}`);
        alert("Caso excluído com sucesso!");
        fetchChartData();
      } catch (error) {
        console.error("Erro ao excluir o caso:", error);
        alert("Erro ao excluir o caso.");
      }
    }
  };

  const handleLocationModalOpen = () => {
    setIsLocationModalOpen(true);
  };

  const handleLocationModalClose = () => {
    setIsLocationModalOpen(false);
  };

  const handleLocationEditModalOpen = (location) => {
    setSelectedLocation(location);
    setIsLocationEditModalOpen(true);
  };

  const handleLocationEditModalClose = () => {
    setIsLocationEditModalOpen(false);
    setSelectedLocation(null);
  };

  const handleSaveLocationChanges = async () => {
    try {
      await axios.put(`http://localhost:3000/locations/${selectedLocation.id}`, selectedLocation);
      alert("Local atualizado com sucesso!");
      setIsLocationEditModalOpen(false);
      fetchLocations();
    } catch (error) {
      console.error("Erro ao atualizar o local:", error);
      alert("Erro ao atualizar o local.");
    }
  };

  const handleLocationInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleDeleteLocation = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este local?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/locations/${id}`);
        alert("Local excluído com sucesso!");
        fetchLocations(); 
      } catch (error) {
        console.error("Erro ao excluir o local:", error);
        alert("Erro ao excluir o local.");
      }
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />

      <DashboardContainer>
        <Reminders>
          <SelfCareReminders />
        </Reminders>

        <DashboardSecondGrid>
          <ChartsContainer>
            <ChartBox>
              <DropdownContainer>
                <label>Selecione a Doença/Infecção: </label>
                <Select value={disease} onChange={(e) => setDisease(e.target.value)}>
                  {diseaseOptions.map((diseaseOption, index) => (
                    <Option key={index} value={diseaseOption}>
                      {diseaseOption}
                    </Option>
                  ))}
                </Select>
              </DropdownContainer>
              <ChartBoxHeading>Evolução de DSTs/ISTs por Ano</ChartBoxHeading>
              <LineChart disease={disease} data={casesData} />
              {isMasterUser && <EyeIcon onClick={handleOpenModal} />} 
            </ChartBox>
          </ChartsContainer>

          <ChartsContainer>
            <ChartBox>
              <ChartBoxHeading>Visão Geral de Todas as Doenças</ChartBoxHeading>
              <PieChart />
            </ChartBox>
          </ChartsContainer>

          <AppContainer>
            <AppHeading>Locais de Testagem de DSTs</AppHeading>
            <MapContainerStyled>
              {isMasterUser && <IoEye onClick={handleLocationModalOpen} />}
              <MapContainer />
            </MapContainerStyled>

            {isLocationModalOpen && (
              <Modal onClose={handleLocationModalClose}>
                <h2>Lista de Locais de Testagem</h2>
                <ul>
                  {locations.map((location) => (
                    <li key={location.id}>
                      <p>
                        <strong>{location.name}</strong> - {location.address}
                      </p>
                      <IoPencil
                        onClick={() => handleLocationEditModalOpen(location)}
                        style={{ cursor: "pointer" }}
                      />
                      <IoTrash
                        onClick={() => handleDeleteLocation(location.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                  ))}
                </ul>
              </Modal>
            )}

            {isLocationEditModalOpen && selectedLocation && (
              <Modal onClose={handleLocationEditModalClose}>
                <h2>Editando Local: {selectedLocation.name}</h2>
                <form>
                  <div>
                    <label>Nome:</label>
                    <input
                      type="text"
                      name="name"
                      value={selectedLocation.name}
                      onChange={handleLocationInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Endereço:</label>
                    <input
                      type="text"
                      name="address"
                      value={selectedLocation.address}
                      onChange={handleLocationInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Horário:</label>
                    <input
                      type="text"
                      name="hours"
                      value={selectedLocation.hours}
                      onChange={handleLocationInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Serviço:</label>
                    <input
                      type="text"
                      name="serviceType"
                      value={selectedLocation.serviceType}
                      onChange={handleLocationInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Latitude:</label>
                    <input
                      type="number"
                      name="latitude"
                      value={selectedLocation.latitude}
                      onChange={handleLocationInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Longitude:</label>
                    <input
                      type="number"
                      name="longitude"
                      value={selectedLocation.longitude}
                      onChange={handleLocationInputChange}
                      required
                    />
                  </div>
                  <button type="button" onClick={handleSaveLocationChanges}>
                    Salvar Alterações
                  </button>
                </form>
              </Modal>
            )}
          </AppContainer>
        </DashboardSecondGrid>

        {showModal && (
          <Modal onClose={handleCloseModal}>
            <h2>Lista de Casos DST</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
              {casesData.map((item) => (
                <li key={item.idCase}>
                  {item.name} - Casos: {JSON.stringify(item.casesByYear)}
                  <IoPencil onClick={() => handleEdit(item.idCase)} style={{ marginLeft: "10px", cursor: "pointer" }} />
                  <IoTrash onClick={() => handleDelete(item.idCase)} style={{ marginLeft: "10px", cursor: "pointer" }} />
                </li>
              ))}
            </ul>
          </Modal>
        )}

        {showEditModal && selectedCase && (
          <Modal onClose={handleCloseEditModal}>
            <h2>Editando Caso: {selectedCase.name}</h2>
            <div>
              <label>Nome da Doença:</label>
              <input
                type="text"
                name="name"
                value={updatedCaseData.name}
                onChange={(e) => setUpdatedCaseData({ ...updatedCaseData, name: e.target.value })}
              />
            </div>
            <div>
              <label>Casos em 2020:</label>
              <input
                type="number"
                name="casesByYear[2020]"
                value={updatedCaseData.casesByYear["2020"]}
                onChange={(e) => handleYearChange("2020", parseInt(e.target.value))}
              />
            </div>
            <div>
              <label>Casos em 2021:</label>
              <input
                type="number"
                name="casesByYear[2021]"
                value={updatedCaseData.casesByYear["2021"]}
                onChange={(e) => handleYearChange("2021", parseInt(e.target.value))}
              />
            </div>
            <div>
              <label>Casos em 2022:</label>
              <input
                type="number"
                name="casesByYear[2022]"
                value={updatedCaseData.casesByYear["2022"]}
                onChange={(e) => handleYearChange("2022", parseInt(e.target.value))}
              />
            </div>
            <button onClick={handleSaveChanges}>Salvar Alterações</button>
          </Modal>
        )}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
