import React from 'react'
import { HomeCardsBody, HomeCardsBodyGraph, HomeCardsBodyTitle } from './styles'
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
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const HomeCards = ({ itemName }) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${itemName} Line Chart`,
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            boxShadow:'1px 1px 1px 1px rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    return (
        <HomeCardsBody>
            <HomeCardsBodyTitle>{itemName}</HomeCardsBodyTitle>
            <HomeCardsBodyGraph>
                <Line options={options} data={data} />
            </HomeCardsBodyGraph>
        </HomeCardsBody>
    )
}

export default HomeCards
