import React from 'react';
import HomeCards from '../../components/HomeCards/HomeCards';
import { HamePageBody, HamePageBodyCards, HamePageBodySections, HamePageBodySectionsLeft, HamePageBodySectionsRight, HamePageBodySectionsTail, HamePageBodySectionsTailLeft, HamePageBodySectionsTailRight } from './styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {

  const pieData = {
    labels: ['Revenue', 'Inventory', 'Sales', 'Reviews', 'Bookings', 'Visitors'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const AreaOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales vs Cost',
      },
    },
  };
  const Arealabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const AreaData = {
    labels: Arealabels,
    datasets: [
      {
        fill: true,
        label: 'Revenue',
        data: Arealabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Cost',
        data: Arealabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const Barlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const BarData = {
    labels: Barlabels,
    datasets: [
      {
        label: 'Sales',
        data: Barlabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Visitors',
        data: Barlabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <HamePageBody>
      <HamePageBodyCards>
        <HomeCards itemName={"Inventory"} />
        <HomeCards itemName={"Sales"} />
        <HomeCards itemName={"Reviews"} />
        <HomeCards itemName={"Bookings"} />
        <HomeCards itemName={"Visitors"} />
      </HamePageBodyCards>
      <HamePageBodySections>
        <HamePageBodySectionsLeft>
          <Pie data={pieData} />
        </HamePageBodySectionsLeft>
        <HamePageBodySectionsRight>
          Right
        </HamePageBodySectionsRight>
      </HamePageBodySections>
      <HamePageBodySectionsTail>
        <HamePageBodySectionsTailLeft>
          <Line options={AreaOptions} data={AreaData} />
        </HamePageBodySectionsTailLeft>
        <HamePageBodySectionsTailRight>
          <Bar options={BarOptions} data={BarData} />
        </HamePageBodySectionsTailRight>
      </HamePageBodySectionsTail>
    </HamePageBody>
  );
}

export default HomePage;
