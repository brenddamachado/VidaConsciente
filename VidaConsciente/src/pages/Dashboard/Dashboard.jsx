import React, { useState } from "react";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import "./Dashboard.css";

const Dashboard = () => {
  const [disease, setDisease] = useState("HIV");

  return (
    <div className="dashboard-container">
      <div className="charts-container">
        <div className="chart-box">
       
          <h3>Evolução de DSTs/ISTs por Ano</h3>
          <LineChart disease={disease} />
             <div className="dropdown-container">
            <label>Selecione a Doença/Infecção: </label>
            <select
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
            >
              <option value="HIV">HIV</option>
              <option value="Sífilis">Sífilis</option>
              <option value="Gonorreia">Gonorreia</option>
              <option value="Herpes">Herpes</option>
            </select>
          </div>
        </div>

        <div className="chart-box">
          <h3>Visão Geral de Todas as Doenças</h3>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
