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
import { AnalyticsData } from '../../types';
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

interface AnalyticsChartProps {
  analyticsData: AnalyticsData[];
  chartType: 'line' | 'bar';
  dataType: 'waste' | 'environmental';
  dateRange: {
    startDate: string;
    endDate: string;
  };
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ 
  analyticsData, 
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
        text: 'Analytics Data',
        color: theme === 'dark' ? '#E2E8F0' : '#333'
      },
    },
  });

  const [chartLoaded, setChartLoaded] = useState(false);
  
  // Effect to trigger the chart loaded animation when data changes
  useEffect(() => {
    setChartLoaded(false);
    const timer = setTimeout(() => {
      setChartLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [chartData, chartType]);

  // Effect for chart animation settings
  useEffect(() => {
    // When chart type changes, we can modify chart options to ensure animations play
    // by updating the animation configuration
    setChartOptions((prev: ChartOptions<any>) => ({
      ...prev,
      animation: {
        duration: 800,
        easing: 'easeOutQuart'
      },
      transitions: {
        active: {
          animation: {
            duration: 400
          }
        }
      }
    }));
  }, [chartType, dataType]);

  useEffect(() => {
    // Initialize with empty chart when no data
    if (!analyticsData.length) {
      setChartData({
        labels: [],
        datasets: []
      });
      return;
    }

    // Sort data chronologically by date
    const sortedData = [...analyticsData].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    // Add date aggregation if we have too many data points
    const aggregateDataIfNeeded = (data: AnalyticsData[]) => {
      // If less than 30 data points, no aggregation needed
      if (data.length <= 30) return data;
      
      const aggregatedData: AnalyticsData[] = [];
      const chunkSize = Math.ceil(data.length / 30); // Limit to around 30 data points
      
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        
        // Use the first date in the chunk
        const aggregatedPoint: AnalyticsData = {
          date: chunk[0].date,
          organicWeight: chunk.reduce((sum, item) => sum + item.organicWeight, 0) / chunk.length,
          inorganicWeight: chunk.reduce((sum, item) => sum + item.inorganicWeight, 0) / chunk.length,
          totalWeight: chunk.reduce((sum, item) => sum + item.totalWeight, 0) / chunk.length,
          pollution: chunk.reduce((sum, item) => sum + item.pollution, 0) / chunk.length,
          globalWarmingImpact: chunk.reduce((sum, item) => sum + item.globalWarmingImpact, 0) / chunk.length
        };
        
        aggregatedData.push(aggregatedPoint);
      }
      
      return aggregatedData;
    };
    
    // Use aggregated data if needed
    const processedData = aggregateDataIfNeeded(sortedData);

    // Format dates for x-axis labels
    const dateLabels = processedData.map(item => item.date);
    
    let chartTitle = '';
    let chartDatasets: any[] = [];
    
    if (dataType === 'waste') {
      chartTitle = `Wet & Dry Waste Analysis (${dateRange.startDate} to ${dateRange.endDate})`;
      
      // For line and bar charts
      chartDatasets = [
        {
          label: 'Wet Waste (kg)',
          data: processedData.map(item => item.organicWeight),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
          label: 'Dry Waste (kg)',
          data: processedData.map(item => item.inorganicWeight),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Total Weight (kg)',
          data: processedData.map(item => item.totalWeight),
          borderColor: 'rgb(153, 102, 255)',
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
        }
      ];
      
      setChartOptions({
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
            text: chartTitle,
            color: theme === 'dark' ? '#E2E8F0' : '#333'
          },
        },
        scales: {
          x: {
            grid: {
              color: theme === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(180, 180, 180, 0.2)'
            },
            ticks: {
              color: theme === 'dark' ? '#A0AEC0' : '#666'
            }
          },
          y: {
            grid: {
              color: theme === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(180, 180, 180, 0.2)'
            },
            ticks: {
              color: theme === 'dark' ? '#A0AEC0' : '#666'
            }
          }
        }
      });
    } else if (dataType === 'environmental') {
      chartTitle = `Environmental Impact Analysis (${dateRange.startDate} to ${dateRange.endDate})`;
      
      // For line and bar charts
      chartDatasets = [
        {
          label: 'Pollution Level',
          data: processedData.map(item => item.pollution),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y'
        },
        {
          label: 'Global Warming Impact',
          data: processedData.map(item => item.globalWarmingImpact),
          borderColor: 'rgb(255, 159, 64)',
          backgroundColor: 'rgba(255, 159, 64, 0.5)',
          yAxisID: 'y'
        }
      ];
      
      setChartOptions({
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
            text: chartTitle,
            color: theme === 'dark' ? '#E2E8F0' : '#333'
          }
        },
        scales: {
          x: {
            grid: {
              color: theme === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(180, 180, 180, 0.2)'
            },
            ticks: {
              color: theme === 'dark' ? '#A0AEC0' : '#666'
            }
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0,
            max: 100,
            title: {
              display: true,
              text: 'Impact Level (0-100)',
              color: theme === 'dark' ? '#A0AEC0' : '#666'
            },
            grid: {
              color: theme === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(180, 180, 180, 0.2)'
            },
            ticks: {
              color: theme === 'dark' ? '#A0AEC0' : '#666'
            }
          }
        }
      });
    }

    setChartData({
      labels: dateLabels,
      datasets: chartDatasets,
    });

  }, [analyticsData, dataType, chartType, dateRange, theme]);

  return (
    <div className={`h-[400px] transition-all duration-300 ${chartLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {chartType === 'line' ? (
        <Line options={chartOptions} data={chartData} />
      ) : (
        <Bar options={chartOptions} data={chartData} />
      )}
    </div>
  );
};

export default AnalyticsChart;