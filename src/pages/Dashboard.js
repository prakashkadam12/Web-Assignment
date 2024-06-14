import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-full md:w-64 flex-shrink-0">
    <div className="p-4 border-b border-gray-700">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-sm mt-2">Welcome, User!</p>
    </div>
    <nav className="mt-4">
      <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700 transition duration-200">Home</a>
      <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 transition duration-200">Analytics</a>
      <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 transition duration-200">Settings</a>
    </nav>
  </div>
);

const Header = () => (
  <header className="flex items-center justify-between py-4 px-6 bg-white shadow-md rounded-lg mb-4">
    <h1 className="text-2xl md:text-3xl font-semibold text-indigo-800">Analytics Dashboard</h1>
    <div className="flex items-center space-x-2 md:space-x-4">
      <button className="bg-indigo-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-indigo-500 transition duration-300">Export</button>
      <button className="bg-indigo-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-indigo-500 transition duration-300">Share</button>
    </div>
  </header>
);

const Card = ({ title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 transform transition duration-300 hover:scale-105">
    <h2 className="text-lg md:text-xl font-semibold text-indigo-800 mb-2">{title}</h2>
    <p className="text-gray-700 text-base md:text-lg">{value}</p>
  </div>
);

const ChartComponent = ({ chartContainer }) => (
  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex-1 transform transition duration-300 hover:scale-105">
    <h2 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4">Weekly Analytics</h2>
    <div className="flex items-center justify-center">
      <canvas ref={chartContainer} style={{ height: '265px', width: '100%' }}></canvas>
    </div>
  </div>
);

const Dashboard = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Page Views',
              data: [500, 1000, 700, 1200, 900, 1500, 1100],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6 flex flex-col">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
          <Card title="Users" value="1000" />
          <Card title="Revenue" value="$10,000" />
          <Card title="Page Views" value="50,000" />
        </div>
        <ChartComponent chartContainer={chartContainer} />
      </div>
    </div>
  );
};

export default Dashboard;
