import React from 'react';
import { MdInventory } from "react-icons/md";
import { FaHandsHelping, FaRegCalendarAlt } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { IoPeopleCircle } from "react-icons/io5";
import useInventory from '../../hooks/useInventory';
import useCustomers from '../../hooks/useCustomers';
import useSales from '../../hooks/useSales';
import useLeads from '../../hooks/useLeads';
import { HamePageBody, HamePageBodySections, HamePageBodySectionsCenter, HamePageBodySectionsContent, HamePageBodySectionsLeft, HamePageBodySectionsRight, HomePageBodyTopIcons, HomePageBodyTopSection } from './styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
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
// import HomeLastEvents from '../../components/HomeLastEvents/HomeLastEvents';

/* Registering the chart.js plugins. */
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

  const [inventory] = useInventory();
  const [sales] = useSales();
  const [customers] = useCustomers();
  const [leads] = useLeads();

  const HomeTopIconsList = [
    {
      Header: 'Inventory',
      Icon: <MdInventory />,
      Amount: inventory.length,
      Color: '#1BDAE1',
    },
    {
      Header: 'Sales',
      Icon: <FaHandsHelping />,
      Amount: sales.length,
      Color: '#07B026',
    },
    {
      Header: 'Customer',
      Icon: <IoPeopleCircle />,
      Amount: customers.length,
      Color: '#DA951F',
    },
    {
      Header: 'Leads',
      Icon: <SiGoogleads />,
      Amount: leads.length,
      Color: '#0D5FCA',
    },
    {
      Header: 'Events',
      Icon: <FaRegCalendarAlt />,
      Amount: 88,
      Color: '#E2062D',
    },
  ];

  /* Setting the options for the pie chart. */
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Inventory Stats',
      },
    },
  };
  /* Creating a constant that is used to set the labels for the pie chart. */
  const pieLabel = ['In Stock', 'Out of Stock'];
  /* Creating a pie chart with random data. */
  const pieData = {
    labels: pieLabel,
    datasets: [
      {
        label: 'Vehicle in Stock',
        data: [inventory.length, sales.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

  /* Setting the options for the bar chart. */
  const leadSummaryBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Lead Stats',
      },
    },
  };
  /* Creating a bar chart with random data. */
  const leadSummaryLabel = ['Total Leads'];
  const leadSummaryData = {
    labels: leadSummaryLabel,
    datasets: [
      {
        label: 'Leads',
        data: [leads.length],
        backgroundColor: 'rgba(13, 228, 106, 0.7)',
      }
    ],
  };
  /* Setting the options for the bar chart. */
  const leadDetailsBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Leads Sources',
      },
    },
  };
  /* Creating a bar chart with random data. */
  const leadDetailsLabel = ['Contact Form', 'Trade-In', 'Web lead - Service Appointment', 'Test Drive', 'Request Info'];
  const leadDetailsData = {
    labels: leadDetailsLabel,
    datasets: [
      {
        label: 'Leads Sources',
        data: [
          (leads.filter(item => item.lead_source === 'contact').length),
          (leads.filter(item => item.lead_source === 'Trade-In').length),
          (leads.filter(item => item.lead_source === 'Web lead - Service Appointment').length),
          (leads.filter(item => item.lead_source === 'Test Drive').length),
          (leads.filter(item => item.lead_source === 'Request Info').length),

        ],
        backgroundColor: [
          '#02B290',
          '#E5D68A',
          '#12B0E8',
          '#FF6263',
          '#F4CE6A',
        ]
      }
    ],
  };
  return (
    <HamePageBody>
      <HomePageBodyTopSection>
        <h1>
          Overall Summary
        </h1>
        {/* Mapping through the HomeTopIconsList array and returning the HomeTopIcons component. */}
        <HomePageBodyTopIcons>
          {HomeTopIconsList.map((list) => (
            <HomeTopIcons Header={list.Header} Icon={list.Icon} Amount={list.Amount} color={list.Color} />
          ))}
        </HomePageBodyTopIcons>
      </HomePageBodyTopSection>

      <HamePageBodySections>
        <h1>
          Historical Stats
        </h1>
        <HamePageBodySectionsContent>
          {/* Creating a pie chart with random data. */}
          <HamePageBodySectionsLeft>
            <Pie options={pieOptions} data={pieData} />
          </HamePageBodySectionsLeft>
          {/* Creating a line chart with random data. */}
          <HamePageBodySectionsCenter>
            <Bar options={leadSummaryBarOptions} data={leadSummaryData} />
            <div className='px-8 my-4 flex justify-between'>
              <p className='inline'>Total Leads</p>
              <p className='inline'>{leads.length}</p>
            </div>
          </HamePageBodySectionsCenter>
          {/* Creating a bar chart with random data. */}
          <HamePageBodySectionsRight>
            <Bar options={leadDetailsBarOptions} data={leadDetailsData} />
            <div className='px-8 my-4 flex justify-between'>
              <p className='inline'>Total Leads</p>
              <p className='inline'>{leads.length}</p>
            </div>
          </HamePageBodySectionsRight>
        </HamePageBodySectionsContent>
      </HamePageBodySections>

      {/* Mapping through the HomeLastEventsList array and returning the HomeLastEvents component. */}
      {/* <HamePageBodySectionsTail>
        {
          HomeLastEventsList.map((list) => (
            <HomeLastEvents Header={list.Header} seventhTH={list.seventhTH} thirtyTh={list.thirtyTH} ninetyTH={list.ninetyTH} />
          ))
        }
      </HamePageBodySectionsTail> */}
      {/* Mapping through the HomeCardsList array and returning the HomeCards component. */}
    </HamePageBody>
  );
}

/* An array of objects that is used to set the props for the HomeTopIcons component. */

/* An array of objects that is used to set the props for the HomeLastEvents component. */
const HomeLastEventsList = [
  {
    Header: 'Leads',
    seventhTH: 7,
    thirtyTH: 30,
    ninetyTH: 90,
  },
  {
    Header: 'Inventory',
    seventhTH: 15,
    thirtyTH: 14,
    ninetyTH: 88,
  },
];

export default HomePage;
