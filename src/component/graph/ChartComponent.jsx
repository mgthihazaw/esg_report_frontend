import React from 'react';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
    const data = {
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'],
        datasets: [
            {
                type: 'bar',
                label: 'Energy Meter (kWh)',
                data: [5, 10, 55, 8, 10, 5, 40, 5, 0, 5, 35, 0, 5, 0, 20, 5, 10, 5, 10, 5, 15, 10, 55, 15],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                type: 'line',
                label: 'Average',
                data: Array(24).fill(15),
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
