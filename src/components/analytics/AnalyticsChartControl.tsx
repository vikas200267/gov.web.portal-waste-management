import React from 'react';
import { BarChart3, LineChart, Recycle, ThermometerSnowflake } from 'lucide-react';

interface AnalyticsChartControlProps {
  chartType: 'line' | 'bar';
  setChartType: (type: 'line' | 'bar') => void;
  dataType: 'waste' | 'environmental';
  setDataType: (type: 'waste' | 'environmental') => void;
}

const AnalyticsChartControl: React.FC<AnalyticsChartControlProps> = ({
  chartType,
  setChartType,
  dataType,
  setDataType
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Chart Type</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setChartType('line')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center space-x-2 ${
              chartType === 'line'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <LineChart className="h-4 w-4" />
            <span>Line</span>
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center space-x-2 ${
              chartType === 'bar'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Bar</span>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Data View</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setDataType('waste')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center space-x-2 ${
              dataType === 'waste'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <Recycle className="h-4 w-4" />
            <span>Waste Data</span>
          </button>
          <button
            onClick={() => setDataType('environmental')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center space-x-2 ${
              dataType === 'environmental'
                ? 'bg-orange-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <ThermometerSnowflake className="h-4 w-4" />
            <span>Environmental Impact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChartControl;