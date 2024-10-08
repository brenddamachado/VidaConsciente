import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ disease }) => {
  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const fetchLineData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/diseases');
        const selectedDisease = response.data.find((d) => d.name === disease);
        if (selectedDisease) {
          const years = Object.keys(selectedDisease.casesByYear);
          const cases = Object.values(selectedDisease.casesByYear);
          setLineData({
            labels: years,
            datasets: [
              {
                label: `Casos de ${disease} por ano`,
                data: cases,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchLineData();
  }, [disease]);

  return <Line data={lineData} />;
};

export default LineChart;
