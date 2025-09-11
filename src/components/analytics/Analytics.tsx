import React, { useState } from 'react';
import { wasteDataService } from '../../services/wasteDataService';
import { AnalyticsData, DateRange, MLAnalysis } from '../../types';
import { Calendar, TrendingUp, BarChart3, PieChart, Download, Lightbulb, AlertTriangle } from 'lucide-react';

export const Analytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [mlAnalysis, setMlAnalysis] = useState<MLAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const handleDateRangeChange = (field: keyof DateRange, value: string) => {
    setDateRange(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyFilter = async () => {
    setLoading(true);
    setShowTable(false);
    
    console.log('Analytics: Fetching data with date range:', dateRange.startDate, 'to', dateRange.endDate);
    
    try {
      const result = await wasteDataService.getAnalyticsData(dateRange.startDate, dateRange.endDate);
      console.log('Analytics: Data received:', result.data.length, 'records');
      setAnalyticsData(result.data);
      setMlAnalysis(result.analysis);
      setShowTable(true);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalOrganic = analyticsData.reduce((sum, item) => sum + item.organicWeight, 0);
  const totalInorganic = analyticsData.reduce((sum, item) => sum + item.inorganicWeight, 0);
  const totalWeight = analyticsData.reduce((sum, item) => sum + item.totalWeight, 0);
  const avgPollution = analyticsData.length > 0 
    ? analyticsData.reduce((sum, item) => sum + item.pollution, 0) / analyticsData.length 
    : 0;
  const avgGlobalWarming = analyticsData.length > 0 
    ? analyticsData.reduce((sum, item) => sum + item.globalWarmingImpact, 0) / analyticsData.length 
    : 0;

  const downloadReport = () => {
    const csvContent = [
      'Date,Wet Waste Container Weight,Dry Waste Container Weight,Total Weight,Pollution,Global Warming Impact',
      ...analyticsData.map(item => 
        `${item.date},${item.organicWeight},${item.inorganicWeight},${item.totalWeight},${item.pollution},${item.globalWarmingImpact}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waste-analytics-${dateRange.startDate}-${dateRange.endDate}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Environmental Analytics</h1>
            <p className="text-gray-600 mt-1">ML-powered pollution and global warming impact analysis</p>
          </div>
          {showTable && (
            <button
              onClick={downloadReport}
              disabled={analyticsData.length === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Download className="h-4 w-4" />
              <span>Download Report</span>
            </button>
          )}
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Select Date Range for Analysis</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => handleDateRangeChange('startDate', e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => handleDateRangeChange('endDate', e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleApplyFilter}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Analyzing...' : 'Apply Filter'}
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Running ML analysis on dashboard data...</p>
          </div>
        </div>
      )}

      {showTable && !loading && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Total Wet Waste</p>
                  <p className="text-2xl font-bold">{totalOrganic.toFixed(1)} kg</p>
                </div>
                <PieChart className="h-8 w-8 text-green-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Dry Waste</p>
                  <p className="text-2xl font-bold">{totalInorganic.toFixed(1)} kg</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Total Weight</p>
                  <p className="text-2xl font-bold">{totalWeight.toFixed(1)} kg</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-sm font-medium">Avg. Pollution</p>
                  <p className="text-2xl font-bold">{avgPollution.toFixed(1)}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Global Warming</p>
                  <p className="text-2xl font-bold">{avgGlobalWarming.toFixed(1)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </div>
          </div>

          {/* ML Analysis Suggestions */}
          {mlAnalysis && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">ML-Powered Suggestions</h3>
                  <p className="text-sm text-gray-600">Based on environmental impact analysis</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Pollution Level Analysis</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          mlAnalysis.pollution > 60 ? 'bg-red-500' : 
                          mlAnalysis.pollution > 40 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(mlAnalysis.pollution, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{mlAnalysis.pollution.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Global Warming Impact</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          mlAnalysis.globalWarmingImpact > 50 ? 'bg-red-500' : 
                          mlAnalysis.globalWarmingImpact > 30 ? 'bg-orange-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(mlAnalysis.globalWarmingImpact, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{mlAnalysis.globalWarmingImpact.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {mlAnalysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-indigo-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Waste Composition Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Composition Analysis</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Wet Waste Container</span>
                    <span className="text-sm font-bold text-green-600">{((totalOrganic / totalWeight) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(totalOrganic / totalWeight) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Dry Waste Container</span>
                    <span className="text-sm font-bold text-blue-600">{((totalInorganic / totalWeight) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(totalInorganic / totalWeight) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Impact Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Impact Levels</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Pollution Level</span>
                    <span className={`text-sm font-bold ${avgPollution > 50 ? 'text-red-600' : avgPollution > 30 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {avgPollution.toFixed(1)}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${avgPollution > 50 ? 'bg-red-500' : avgPollution > 30 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      style={{ width: `${Math.min(avgPollution, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Global Warming Impact</span>
                    <span className={`text-sm font-bold ${avgGlobalWarming > 40 ? 'text-red-600' : avgGlobalWarming > 25 ? 'text-orange-600' : 'text-green-600'}`}>
                      {avgGlobalWarming.toFixed(1)}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${avgGlobalWarming > 40 ? 'bg-red-500' : avgGlobalWarming > 25 ? 'bg-orange-500' : 'bg-green-500'}`}
                      style={{ width: `${Math.min(avgGlobalWarming, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Detailed Analytics Data (ML Processed)</h3>
            </div>
            
            <div className="overflow-x-auto">
              {analyticsData.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No data available for the selected date range.
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wet Waste Container Weight (kg)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dry Waste Container Weight (kg)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Weight (kg)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pollution Level</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Global Warming Impact</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {analyticsData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">{item.organicWeight.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">{item.inorganicWeight.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-medium">{item.totalWeight.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            item.pollution > 50 ? 'bg-red-100 text-red-800' : 
                            item.pollution > 30 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {item.pollution.toFixed(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            item.globalWarmingImpact > 40 ? 'bg-red-100 text-red-800' : 
                            item.globalWarmingImpact > 25 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {item.globalWarmingImpact.toFixed(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </>
      )}

      {!showTable && !loading && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Date Range to View Analytics</h3>
          <p className="text-gray-600">Choose your desired date range and click "Apply Filter" to analyze waste data with our ML model.</p>
        </div>
      )}
    </div>
  );
};