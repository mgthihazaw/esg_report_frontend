import React from 'react';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({dataConsumptions}) => {
    const total = dataConsumptions.reduce((sum, item) => sum + item.consumption, 0);
    
    const average = total / dataConsumptions.length
    
    const data = {
        labels: dataConsumptions.map(item => item.time),
        datasets: [
            {
                type: 'bar',
                label: 'Energy Meter (kWh)',
                data: dataConsumptions.map(item => item.consumption),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                type: 'line',
                label: 'Average',
                data: Array(24).fill(average),
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
            <Bar data={data} options={options} />
    );
};

export default ChartComponent;
