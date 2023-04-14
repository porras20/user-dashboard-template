import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
      setChartData({
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Sales $",
            data: [18127, 17526, 16327, 16950, 16523, 10899, 10050],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235, 0.4)'
          },
        ],
      });
      setChartOptions({
        plugins: {
            legend:{
                position: 'top',
            },
            title: {
                display: true,
                text: 'DailyRevenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
      })
    }, [])
    
  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50hv] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions}/>
      </div>
    </>
  );
}
