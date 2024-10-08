import React, { useState } from 'react';
import LineChart from '../../components/LineChart/LineChart';
import PieChart from '../../components/PieChart/PieChart';

const Dashboard = () => {
  const [disease, setDisease] = useState('HIV');

  return (
    <div className="dashboard-container">
      <h2>Dashboard de DSTs/ISTs</h2>

  
      <div>
        <label>Selecione a Doença/Infecção: </label>
        <select value={disease} onChange={(e) => setDisease(e.target.value)}>
          <option value="HIV">HIV</option>
          <option value="Sífilis">Sífilis</option>
          <option value="Gonorreia">Gonorreia</option>
          <option value="Herpes">Herpes</option>
          <option value="aaa">aaa</option>
          
        </select>
      </div>

     
      <div className="chart-container">
        <LineChart disease={disease} />
      </div>

 
      <div className="chart-container">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
