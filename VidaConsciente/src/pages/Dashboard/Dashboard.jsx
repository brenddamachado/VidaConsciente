import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import SelfCareReminders from "../../components/SelfCareReminders/SelfCareReminders";
import "./Dashboard.css";
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


  const [chartData, setChartData] = useState([]); 

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsMasterUser(userEmail === 'master@example.com');

    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/searchAllCases");
      setCasesData(response.data.Allcases); 
      setChartData(response.data.Allcases); 
    } catch (error) {
      setError("Erro ao buscar os casos");
      console.error("Erro ao buscar os casos:", error);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEdit = (id) => {
    const caseToEdit = casesData.find(item => item.idCase === id);
    setSelectedCase(caseToEdit);
    setUpdatedCaseData(caseToEdit)
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
        [year]: value
      }
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

  return (
    <>
      <NavBar />
      <SideBar />

      <div className="dashboard-container">
        <div className="reminders">
          <SelfCareReminders />
        </div>

        <div className="dashboard-2ndGrid">
          <div className="charts-container">
            <div className="chart-box">
              <div className="dropdown-container">
                <label>Selecione a Doença/Infecção: </label>
                <select
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                >
                  {diseaseOptions.map((diseaseOption, index) => (
                    <option key={index} value={diseaseOption}>
                      {diseaseOption}
                    </option>
                  ))}
                </select>
              </div>
              <h3>Evolução de DSTs/ISTs por Ano</h3>
              <LineChart disease={disease} data={chartData} /> 
              {isMasterUser && <IoEye onClick={handleOpenModal} />} 
            </div>
          </div>

          <div className="chart-box">
            {isMasterUser && <IoEye onClick={handleOpenModal} />}
            <h3>Visão Geral de Todas as Doenças</h3>
            <PieChart />
          </div>

          <div className="App">
            <h1>Locais de Testagem de DSTs</h1>
            <div className="map-container">
              {isMasterUser && <IoEye onClick={handleOpenModal} />}
              <MapContainer />
            </div>
          </div>
        </div>


        {showModal && (
          <Modal onClose={handleCloseModal}>
            <h2>Lista de Casos DST</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
      </div>
    </>
  );
};

export default Dashboard;
