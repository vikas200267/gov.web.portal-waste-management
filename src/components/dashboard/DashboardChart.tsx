import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { WasteData, AnalyticsData } from '../../types';
import { useTheme } from '../../context/ThemeContext';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardChartProps {
  wasteData: WasteData[];
  chartType: 'line' | 'bar';
  dataType: 'waste' | 'gas' | 'environment';
  dateRange: {
    startDate: string;
    endDate: string;
  };
}

const DashboardChart: React.FC<DashboardChartProps> = ({ 
  wasteData, 
  chartType, 
  dataType,
  dateRange
}) => {
  const { theme } = useTheme();
  const [chartData, setChartData] = useState<ChartData<any, number[], string>>({
    labels: [],
    datasets: [],
  });
  
  // Set Chart.js defaults based on theme
  useEffect(() => {
    ChartJS.defaults.font.family = "'Inter', 'system-ui', 'sans-serif'";
    ChartJS.defaults.color = theme === 'dark' ? '#A0AEC0' : '#666'; // Gray for dark mode, dark gray for light
    ChartJS.defaults.borderColor = theme === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(180, 180, 180, 0.2)';
    ChartJS.defaults.plugins.tooltip.titleFont = { weight: 'bold', size: 13 };
    ChartJS.defaults.plugins.tooltip.bodyFont = { size: 12 };
    ChartJS.defaults.plugins.tooltip.padding = 10;
    ChartJS.defaults.plugins.tooltip.cornerRadius = 6;
    ChartJS.defaults.plugins.tooltip.backgroundColor = theme === 'dark' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    ChartJS.defaults.plugins.tooltip.titleColor = theme === 'dark' ? '#E2E8F0' : '#333'; 
    ChartJS.defaults.plugins.tooltip.bodyColor = theme === 'dark' ? '#A0AEC0' : '#555';
  }, [theme]);
  
  const [chartOptions, setChartOptions] = useState<ChartOptions<any>>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme === 'dark' ? '#A0AEC0' : '#666'
        }
      },
      title: {
        display: true,
        text: 'Dashboard Data',
        color: theme === 'dark' ? '#E2E8F0' : '#333'
      },
    },
  });

  // Prepare data for chart based on the data type
  useEffect(() => {
    if (wasteData.length === 0) return;
    
    // Process and format the data for the selected data type
    const dates = wasteData.map(item => {
      const date = new Date(item.timestamp);
      return date.toLocaleDateString();
    });
    
    // Prepare different datasets based on the selected data type
    let datasets = [];
    let chartTitle = '';

    if (dataType === 'waste') {
      chartTitle = 'Waste Collection Data';
      datasets = [
        {
          label: 'Wet Waste',
          data: wasteData.map(item => item.organicWeight),
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          tension: 0.3
        },
        {
          label: 'Dry Waste',
          data: wasteData.map(item => item.inorganicWeight),
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.3
        },
        {
          label: 'Total Waste',
          data: wasteData.map(item => item.totalWeight),
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          tension: 0.3
        }
      ];
    } 
    else if (dataType === 'gas') {
      chartTitle = 'Gas Level Measurements';
      datasets = [
        {
          label: 'Methane (ppm)',
          data: wasteData.map(item => item.methane || 0),
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          tension: 0.3
        },
        {
          label: 'Carbon Monoxide (ppm)',
          data: wasteData.map(item => item.carbonMonoxide || 0),
          borderColor: '#F59E0B',
          backgroundColor: 'rgba(245, 158, 11, 0.2)',
          tension: 0.3
        },
        {
          label: 'Ammonia (ppm)',
          data: wasteData.map(item => item.ammonia || 0),
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          tension: 0.3
        },
        {
          label: 'Sulfide (ppm)',
          data: wasteData.map(item => item.sulfide || 0),
          borderColor: '#6366F1',
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          tension: 0.3
        },
        {
          label: 'Benzene (ppm)',
          data: wasteData.map(item => item.benzene || 0),
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          tension: 0.3
        }
      ];
    } 
    else if (dataType === 'environment') {
      chartTitle = 'Environmental Conditions';
      datasets = [
        {
          label: 'Temperature (°C)',
          data: wasteData.map(item => item.temperature),
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          tension: 0.3,
          yAxisID: 'y'
        },
        {
          label: 'Humidity (%)',
          data: wasteData.map(item => item.humidity),
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.3,
          yAxisID: 'y1'
        }
      ];
    }
    
    setChartData({
      labels: dates,
      datasets: datasets
    });
    
    // Update chart options based on data type
    const updatedOptions: ChartOptions<any> = {
      ...chartOptions,
      plugins: {
        ...chartOptions.plugins,
        title: {
          ...chartOptions.plugins?.title,
          text: chartTitle
        }
      }
    };
    
    // Add dual axes for environment data
    if (dataType === 'environment') {
      updatedOptions.scales = {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Temperature (°C)'
          },
          ticks: {
            color: theme === 'dark' ? '#A0AEC0' : '#666'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Humidity (%)'
          },
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            color: theme === 'dark' ? '#A0AEC0' : '#666'
          }
        }
      };
    } else {
      updatedOptions.scales = {
        y: {
          beginAtZero: true,
          ticks: {
            color: theme === 'dark' ? '#A0AEC0' : '#666'
          }
        },
        x: {
          ticks: {
            color: theme === 'dark' ? '#A0AEC0' : '#666'
          }
        }
      };
    }
    
    setChartOptions(updatedOptions);
    
  }, [wasteData, dataType, theme, chartType]);

  return (
    <div className="h-full w-full">
      {chartData.datasets.length > 0 && (
        <>
          {chartType === 'line' ? (
            <Line data={chartData} options={chartOptions} />
          ) : (
            <Bar data={chartData} options={chartOptions} />
          )}
        </>
      )}
    </div>
  );
};

export default DashboardChart;