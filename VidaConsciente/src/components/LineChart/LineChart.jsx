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
        const response = await axios.get('http://localhost:3000/searchAllDST'); // A rota correta

        console.log("Dados da API:", response.data); // Verifica a estrutura dos dados recebidos

        if (response.data && response.data.Allcases) { // Verifica se 'Allcases' existe
          const selectedDisease = response.data.Allcases.find((d) => d.name === disease);

          if (selectedDisease && selectedDisease.casesByYear) { // Certifica-se que casesByYear existe
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
          } else {
            console.error('Doença não encontrada nos dados ou sem casos por ano.');
          }
        } else {
          console.error('Dados da API não estão no formato esperado.');
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
