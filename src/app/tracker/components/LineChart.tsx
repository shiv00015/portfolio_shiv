'use client'

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import type { ChartOptions, ChartData } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// ✅ Chart Data
const data: ChartData<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Tasks Completed',
            data: [2, 4, 3, 5, 6, 7, 8],
            borderColor: '#3b82f6', // Tailwind blue-500
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4, // curved line
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#3b82f6',
        },
    ],
};

// ✅ Chart Options
const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: '#6B7280', // Tailwind gray-800
                font: { size: 14, weight: 'bold' },
            },
        },
        tooltip: {
            backgroundColor: '#111827',
            titleColor: '#fff',
            bodyColor: '#d1d5db',
            padding: 10,
            cornerRadius: 6,
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#6B7280', // gray-600
            },
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
                color: '#6B7280',
            },
            grid: {
                color: '#e5e7eb', // gray-200
            },
            beginAtZero: true,
        },
    },
};


function LineChart() {
    return <>
        <Line data={data} options={options} />
    </>
}

export default LineChart;
