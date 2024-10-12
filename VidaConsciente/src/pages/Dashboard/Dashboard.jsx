import React, { useState } from "react";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import SelfCareReminders from "../../components/SelfCareReminders/SelfCareReminders";
import "./Dashboard.css";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

import MapContainer from "../../components/MapComponent/MapComponent";




const diseaseOptions = ["HIV", "Sífilis", "Gonorreia", "Clamídia", "Herpes Genital"];

const Dashboard = () => {
  const [disease, setDisease] = useState("HIV");

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
              <LineChart disease={disease} />
            </div>
          </div>

          <div className="chart-box">
            <h3>Visão Geral de Todas as Doenças</h3>
            <PieChart />
          </div>

          <div className="App">
            <h1>Locais de Testagem de DSTs</h1>
            <div className="map-container">
              <MapContainer />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
