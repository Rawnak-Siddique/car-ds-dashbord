import React from 'react';
import HomeCards from '../../components/HomeCards/HomeCards';
import { MdInventory } from "react-icons/md";
import { FaHandsHelping, FaRegCalendarAlt } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { IoPeopleCircle } from "react-icons/io5";
import { HamePageBody, HamePageBodyCards, HamePageBodySections, HamePageBodySectionsCenter, HamePageBodySectionsLeft, HamePageBodySectionsRight, HamePageBodySectionsTail, HamePageBodySectionsTailLeft, HamePageBodySectionsTailRight, HomePageBodyTopIcons } from './styles';
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
import HomeTopIcons from '../../components/HomeTopIcons/HomeTopIcons';

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
      <HomePageBodyTopIcons>
        {HomeTopIconsList.map((list) => (
          <HomeTopIcons Header={list.Header} Icon={list.Icon} Amount={list.Amount} /> 
        ))}
      </HomePageBodyTopIcons>
      
      <HamePageBodySections>
        <HamePageBodySectionsLeft>
          <Pie data={pieData} />
        </HamePageBodySectionsLeft>
        <HamePageBodySectionsCenter>
          <Line options={AreaOptions} data={AreaData} />
        </HamePageBodySectionsCenter>
        <HamePageBodySectionsRight>
          <Bar options={BarOptions} data={BarData} />
        </HamePageBodySectionsRight>
      </HamePageBodySections>
      <HamePageBodySectionsTail>
        <HamePageBodySectionsTailLeft>
          Inventory
        </HamePageBodySectionsTailLeft>
        <HamePageBodySectionsTailRight>
          sales
        </HamePageBodySectionsTailRight>
      </HamePageBodySectionsTail>
      <HamePageBodyCards>
        <HomeCards itemName={"Inventory"} />
        <HomeCards itemName={"Sales"} />
        <HomeCards itemName={"Reviews"} />
        <HomeCards itemName={"Bookings"} />
        <HomeCards itemName={"Visitors"} />
      </HamePageBodyCards>
    </HamePageBody>
  );
}

const HomeTopIconsList = [
  {
    Header: 'Inventory',
    Icon: <MdInventory />,
    Amount: 55,
  },
  {
    Header: 'Sales',
    Icon: <FaHandsHelping />,
    Amount: 125,
  },
  {
    Header: 'Customer',
    Icon: <IoPeopleCircle />,
    Amount: 420,
  },
  {
    Header: 'Leads',
    Icon: <SiGoogleads />,
    Amount: 14,
  },
  {
    Header: 'Events',
    Icon: <FaRegCalendarAlt />,
    Amount: 88,
  },
];

export default HomePage;
