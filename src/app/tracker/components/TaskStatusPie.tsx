'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaskStatusPie() {
    const data = {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [
            {
                label: 'Tasks',
                data: [12, 5, 8],
                backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
                borderColor: ['#fff'],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // for flexibility
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // 'top' | 'left' | 'right'
                labels: {
                    color: '#6B7280', // Tailwind gray-700
                    //   font: {
                    //     family: 'Inter',
                    //     size: 14,
                    //     weight: '500',
                    //   },
                    boxWidth: 12,
                    padding: 20,
                },
            },
            tooltip: {
                backgroundColor: '#111827', // dark bg
                titleColor: '#fff',
                bodyColor: '#d1d5db',
                padding: 12,
                cornerRadius: 8,
            },
        },
        backgroundColor: 'transparent', // this is ignored by ChartJS itself
    } as any;


    return (
        <div className="rounded-xl w-full h-full">
            {/* <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Task Status</h2> */}
            <Pie data={data} options={options} />
        </div>
    );
}
