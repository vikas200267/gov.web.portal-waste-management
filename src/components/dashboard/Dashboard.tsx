import React, { useState, useEffect } from 'react';
import { wasteDataService } from '../../services/wasteDataService';
import { WasteData } from '../../types';
import { RefreshCw, Trash2, TreePine, Factory, Thermometer, Droplets, Wind } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [wasteData, setWasteData] = useState<WasteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'connecting'>('connecting');

  useEffect(() => {
    setConnectionStatus('connecting');
    
    const unsubscribe = wasteDataService.subscribeToRealtimeData((data) => {
      setWasteData(data);
      setLastUpdate(new Date());
      setLoading(false);
      setConnectionStatus('connected');
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
      setConnectionStatus('disconnected');
    };
  }, []);

  const totalOrganic = wasteData.reduce((sum, item) => sum + item.organicWeight, 0);
  const totalInorganic = wasteData.reduce((sum, item) => sum + item.inorganicWeight, 0);
  const avgTemperature = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + item.temperature, 0) / wasteData.length 
    : 0;
  const avgHumidity = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + item.humidity, 0) / wasteData.length 
    : 0;
  // Get average gas readings in ppm
  const avgMethanePpm = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + (item.methane || 0), 0) / wasteData.length 
    : 0;
  const avgAmmoniaPpm = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + (item.ammonia || 0), 0) / wasteData.length 
    : 0;
  const avgSulfidePpm = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + (item.sulfide || 0), 0) / wasteData.length 
    : 0;
  const avgBenzenePpm = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + (item.benzene || 0), 0) / wasteData.length 
    : 0;
  const avgCarbonMonoxidePpm = wasteData.length > 0 
    ? wasteData.reduce((sum, item) => sum + (item.carbonMonoxide || 0), 0) / wasteData.length 
    : 0;
  
  // Convert to percentage based on typical maximum scales
  // These scales represent typical dangerous levels for each gas
  const maxMethanePpm = 500; // Max methane scale
  const maxAmmoniaPpm = 300; // Max ammonia scale
  const maxSulfidePpm = 200; // Max hydrogen sulfide scale
  const maxBenzenePpm = 150; // Max benzene scale
  const maxCarbonMonoxidePpm = 400; // Max CO scale
  
  // Calculate percentages based on typical max values
  const methanePercentage = (avgMethanePpm / maxMethanePpm) * 100;
  const ammoniaPercentage = (avgAmmoniaPpm / maxAmmoniaPpm) * 100;
  const sulfidePercentage = (avgSulfidePpm / maxSulfidePpm) * 100;
  const benzenePercentage = (avgBenzenePpm / maxBenzenePpm) * 100;
  const carbonMonoxidePercentage = (avgCarbonMonoxidePpm / maxCarbonMonoxidePpm) * 100;


  const stats = [
    {
      title: 'Total Wet Waste',
      value: `${totalOrganic.toFixed(1)} kg`,
      icon: TreePine,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Dry Waste',
      value: `${totalInorganic.toFixed(1)} kg`,
      icon: Factory,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Avg. Temperature',
      value: `${avgTemperature.toFixed(1)}°C`,
      icon: Thermometer,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Avg. Humidity',
      value: `${avgHumidity.toFixed(1)}%`,
      icon: Droplets,
      color: 'bg-cyan-500',
      bgColor: 'bg-cyan-50',
    },

    {
      title: 'Methane',
      value: `${methanePercentage.toFixed(1)}%`,
      icon: Wind,
      color: methanePercentage > 70 ? 'bg-red-500' : methanePercentage > 40 ? 'bg-yellow-500' : 'bg-green-500',
      bgColor: methanePercentage > 70 ? 'bg-red-50' : methanePercentage > 40 ? 'bg-yellow-50' : 'bg-green-50',
    },
    {
      title: 'Ammonia',
      value: `${ammoniaPercentage.toFixed(1)}%`,
      icon: Wind,
      color: ammoniaPercentage > 70 ? 'bg-red-500' : ammoniaPercentage > 40 ? 'bg-yellow-500' : 'bg-green-500',
      bgColor: ammoniaPercentage > 70 ? 'bg-red-50' : ammoniaPercentage > 40 ? 'bg-yellow-50' : 'bg-green-50',
    },
    {
      title: 'Sulfide',
      value: `${sulfidePercentage.toFixed(1)}%`,
      icon: Wind,
      color: sulfidePercentage > 70 ? 'bg-red-500' : sulfidePercentage > 40 ? 'bg-yellow-500' : 'bg-green-500',
      bgColor: sulfidePercentage > 70 ? 'bg-red-50' : sulfidePercentage > 40 ? 'bg-yellow-50' : 'bg-green-50',
    },
    {
      title: 'Benzene',
      value: `${benzenePercentage.toFixed(1)}%`,
      icon: Wind,
      color: benzenePercentage > 70 ? 'bg-red-500' : benzenePercentage > 40 ? 'bg-yellow-500' : 'bg-green-500',
      bgColor: benzenePercentage > 70 ? 'bg-red-50' : benzenePercentage > 40 ? 'bg-yellow-50' : 'bg-green-50',
    },
    {
      title: 'Carbon Monoxide',
      value: `${carbonMonoxidePercentage.toFixed(1)}%`,
      icon: Wind,
      color: carbonMonoxidePercentage > 70 ? 'bg-red-500' : carbonMonoxidePercentage > 40 ? 'bg-yellow-500' : 'bg-green-500',
      bgColor: carbonMonoxidePercentage > 70 ? 'bg-red-50' : carbonMonoxidePercentage > 40 ? 'bg-yellow-50' : 'bg-green-50',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Waste Management Dashboard</h1>
            <p className="text-gray-600 mt-1">Real-time monitoring of waste containers</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                connectionStatus === 'connected' ? 'bg-green-500' : 
                connectionStatus === 'connecting' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <span className="text-sm text-gray-600 capitalize">{connectionStatus}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Wind className="h-4 w-4" />
              <span className="text-sm">Firebase Realtime</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Last updated: {lastUpdate.toLocaleString()}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className={`${stat.bgColor} rounded-xl p-6 border border-gray-100`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>



      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trash2 className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Real-time Sensor Data</h2>
            </div>
            <div className="text-sm text-gray-500">
              {wasteData.length} records
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center">
              <RefreshCw className="h-8 w-8 text-gray-400 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Connecting to Firebase...</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Area Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Wet Waste Container Weight (kg)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dry Waste Container Weight (kg)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Weight (kg)
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Humidity (%)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Temperature (°C)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Methane (ppm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ammonia (ppm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sulfide (ppm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Benzene (ppm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Carbon Monoxide (ppm)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {wasteData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.timestamp.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {item.areaCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      {item.organicWeight}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                      {item.inorganicWeight}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {item.totalWeight}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-600 font-medium">
                      {item.humidity}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                      {item.temperature}°C
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        (item.methane || 0) > 50 
                          ? 'bg-red-100 text-red-800' 
                          : (item.methane || 0) > 30 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.methane || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        (item.ammonia || 0) > 45 
                          ? 'bg-red-100 text-red-800' 
                          : (item.ammonia || 0) > 25 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.ammonia || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        (item.sulfide || 0) > 40 
                          ? 'bg-red-100 text-red-800' 
                          : (item.sulfide || 0) > 25 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.sulfide || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        (item.benzene || 0) > 35 
                          ? 'bg-red-100 text-red-800' 
                          : (item.benzene || 0) > 20 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.benzene || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        (item.carbonMonoxide || 0) > 45 
                          ? 'bg-red-100 text-red-800' 
                          : (item.carbonMonoxide || 0) > 25 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.carbonMonoxide || 0}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};