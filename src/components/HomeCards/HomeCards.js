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
    /* This is the options for the chart.js. It is used to set the properties of the chart. */
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: `${itemName} Line Chart`,  //name of the chart which is passed as parameter
          },
        },
      };
      /* Creating a list of labels for the chart. */
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // labels for the chart is listed here
      /* Creating a list of datasets for the chart. */
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })), // list of datasets is generated with labels for the chart
            borderColor: 'rgb(202, 217, 5)',//border color of line chart
            backgroundColor: 'rgba(202, 217, 5, 0.5)', //background color of line chart in the box
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),// list of datasets is generated with labels for the chart
            borderColor: 'rgba(13, 228, 106, 0.7)',                                //border color of line chart
            backgroundColor: 'rgba(13, 228, 106, 0.5)',                            //background color of line chart in the box
          },
        ],
      };
    return (
        <HomeCardsBody>
           {/* Just a title for the chart. */}
            <HomeCardsBodyTitle>{itemName}</HomeCardsBodyTitle> {/*items name passed as parameter*/}
            {/* Calling the line chart and passing the parameters to it. */}
            <HomeCardsBodyGraph>
                <Line options={options} data={data} />{/* Line chart is called and passed parameters for it needs */}
            </HomeCardsBodyGraph>
        </HomeCardsBody>
    )
}

export default HomeCards
