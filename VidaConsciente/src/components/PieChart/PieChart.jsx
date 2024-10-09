import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  });

  useEffect(() => {
    const fetchPieData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/diseases');
        const totalCases = response.data.reduce((acc, disease) => {
          const yearlyCases = Object.values(disease.casesByYear);
          return acc + yearlyCases.reduce((sum, cases) => sum + cases, 0);
        }, 0);

        const dsts = response.data.map((d) => d.name);
        const percentages = response.data.map((d) => {
          const yearlyCases = Object.values(d.casesByYear);
          const totalDiseaseCases = yearlyCases.reduce((sum, cases) => sum + cases, 0);
          return ((totalDiseaseCases / totalCases) * 100).toFixed(2);
        });

        setPieData({
          labels: dsts,
          datasets: [
            {
              data: percentages,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao buscar dados do gráfico de pizza:', error);
      }
    };

    fetchPieData();
  }, []);

  return <Pie data={pieData} />;
};

export default PieChart;
