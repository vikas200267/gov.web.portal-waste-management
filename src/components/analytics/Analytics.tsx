import React, { useState, useRef } from 'react';
import { useAnalyticsContext } from '../../context/AnalyticsContext';
import { wasteDataService } from '../../services/wasteDataService';
import { pdfService } from '../../services/pdfService';
import { AnalyticsData, DateRange, MLAnalysis } from '../../types';
import { Calendar, TrendingUp, BarChart3, Download, Lightbulb, AlertTriangle, LineChart } from 'lucide-react';
import AnalyticsChart from './AnalyticsChart';
import AnalyticsChartControl from './AnalyticsChartControl';

export const Analytics: React.FC = () => {
  const {
    analyticsData,
    setAnalyticsData,
    mlAnalysis,
    setMlAnalysis,
    dateRange,
    setDateRange
  } = useAnalyticsContext();
  const [loading, setLoading] = useState(false);
  // Check if there's data from a previous search (from context)
  const hasInitialData = analyticsData.length > 0;
  
  // Ensure showTable reflects whether we have data to display
  const [showTable, setShowTable] = useState(hasInitialData);
  
  // Track whether user has searched yet to show appropriate message
  const [hasSearched, setHasSearched] = useState(hasInitialData);
  
  // Chart state
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [dataType, setDataType] = useState<'waste' | 'environmental'>('waste');

  const handleDateRangeChange = (field: keyof DateRange, value: string) => {
  setDateRange({ ...dateRange, [field]: value });
  };

  const handleApplyFilter = async () => {
    setLoading(true);
    setShowTable(false);
    try {
      console.log('Fetching analytics data for date range:', dateRange.startDate, 'to', dateRange.endDate);
      const result = await wasteDataService.getAnalyticsData(dateRange.startDate, dateRange.endDate);
      setAnalyticsData(result.data);
      setMlAnalysis(result.analysis);
      
      // Mark that user has performed a search
      setHasSearched(true);
      
      // Only show table if we have data
      if (result.data.length > 0) {
        setShowTable(true);
      } else {
        console.log('No data found for date range:', dateRange.startDate, 'to', dateRange.endDate);
      }
    } catch (error) {
      console.error('Error loading analytics data:', error);
      setAnalyticsData([]);
      setHasSearched(true); // Still mark as searched even if there's an error
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

  const chartRef = useRef<HTMLDivElement>(null);
  const pdfContentRef = useRef<HTMLDivElement>(null);

  const downloadReport = async () => {
    if (analyticsData.length === 0) {
      console.error("Cannot generate PDF: No data available");
      alert("No data available to generate PDF. Please select a date range with data and click 'Apply Filter' first.");
      return;
    }
    
    console.log('Starting PDF generation...');
    console.log('Analytics data points:', analyticsData.length);
    console.log('PDF content ref available:', !!pdfContentRef.current);
    
    // Add a small delay to make sure the charts are fully rendered
    console.log('Waiting for charts to render...');
    await new Promise(resolve => setTimeout(resolve, 800));

    // Generate suggestions based on ML analysis
    const suggestions: string[] = [];
    
    if (mlAnalysis) {
      if (mlAnalysis.pollution > 50) {
        suggestions.push(`High pollution levels detected (${mlAnalysis.pollution.toFixed(1)}). Consider implementing stricter waste segregation policies.`);
      }
      
      if (mlAnalysis.globalWarmingImpact > 70) {
        suggestions.push(`Significant global warming impact detected (${mlAnalysis.globalWarmingImpact.toFixed(1)}). Evaluate carbon footprint reduction strategies.`);
      }
      
      // Add any suggestions from the ML model
      if (mlAnalysis.suggestions && mlAnalysis.suggestions.length > 0) {
        mlAnalysis.suggestions.forEach(suggestion => suggestions.push(suggestion));
      }
    }
    
    // If no suggestions, add general ones
    if (suggestions.length === 0) {
      suggestions.push("Consider implementing a waste segregation awareness program.");
      suggestions.push("Regular monitoring of waste patterns can lead to better management strategies.");
      suggestions.push("Evaluate the efficiency of current waste collection routes and schedules.");
    }
    
    console.log('Generated suggestions:', suggestions.length);
    
    try {
      console.log('Calling pdfService.generateAnalyticsReport...');
      
      // Prepare analytics data for PDF
      const pdfData = {
        analyticsData,
        totalOrganic,
        totalInorganic,
        totalWeight,
        avgPollution,
        avgGlobalWarming
      };
      
      // Generate the PDF using the new analytics report function
      const result = await pdfService.generateAnalyticsReport(
        pdfData,
        pdfContentRef.current,
        {
          title: 'Environmental Analytics Report',
          dateRange,
          suggestions
        }
      );
      
      if (result) {
        console.log('✓ Analytics PDF generated successfully');
        alert('PDF report downloaded successfully!');
      } else {
        console.error('✗ PDF generation failed - function returned false');
        alert('Failed to generate PDF. Please check the console for errors.');
      }
    } catch (error) {
      console.error('✗ Error generating PDF:', error);
      alert(`Error generating PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Environmental Analytics</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">ML-powered pollution and global warming impact analysis</p>
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
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Select Date Range for Analysis</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => handleDateRangeChange('startDate', e.target.value)}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Date</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => handleDateRangeChange('endDate', e.target.value)}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

      {!loading && hasSearched && analyticsData.length === 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-8 mb-8 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Data Found for Selected Dates</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                There is no real waste management data available for the period <span className="text-yellow-700 dark:text-yellow-400 font-bold">{dateRange.startDate}</span> to <span className="text-yellow-700 dark:text-yellow-400 font-bold">{dateRange.endDate}</span>.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Possible reasons:</span>
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                  <li>No data has been collected for this date range</li>
                  <li>Data collection devices were offline during this period</li>
                  <li>Data has not yet been uploaded to the system</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <span className="font-semibold">Recommended actions:</span>
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                  <li>Try selecting a different date range</li>
                  <li>Check the Dashboard page for available data periods</li>
                  <li>Contact system administrator if data should be available</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={async () => {
                // Set date range to past 30 days as a helpful default
                const endDate = new Date().toISOString().split('T')[0];
                const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
                
                // Update the date range in the UI
                setDateRange({ startDate, endDate });
                
                // Trigger a regular data fetch
                setLoading(true);
                setShowTable(false);
                try {
                  console.log('Checking for data in last 30 days:', startDate, 'to', endDate);
                  const result = await wasteDataService.getAnalyticsData(startDate, endDate);
                  setAnalyticsData(result.data);
                  setMlAnalysis(result.analysis);
                  setHasSearched(true);
                  
                  // Only show table if we have data
                  if (result.data.length > 0) {
                    setShowTable(true);
                  } else {
                    console.log('No data found for last 30 days');
                    // Keep the message showing that no data is available
                  }
                } catch (error) {
                  console.error('Error loading analytics data:', error);
                  setAnalyticsData([]);
                } finally {
                  setLoading(false);
                }
              }}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition-colors duration-150 text-sm"
            >
              Try Last 30 Days
            </button>
          </div>
        </div>
      )}

      {showTable && !loading && analyticsData.length > 0 && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Total Wet Waste</p>
                  <p className="text-2xl font-bold">{totalOrganic.toFixed(1)} kg</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-200" />
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
                  <p className="text-red-100 text-sm font-medium">Pollution Level</p>
                  <p className="text-2xl font-bold">{avgPollution.toFixed(1)}<span className="text-sm">/100</span></p>
                  <p className="text-xs mt-1 text-red-100">
                    {avgPollution > 60 ? 'Critical - Action Required' : 
                     avgPollution > 40 ? 'Elevated - Monitoring Needed' : 
                     'Acceptable Range'}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Global Warming Impact</p>
                  <p className="text-2xl font-bold">{avgGlobalWarming.toFixed(1)}<span className="text-sm">/100</span></p>
                  <p className="text-xs mt-1 text-orange-100">
                    {avgGlobalWarming > 50 ? 'High Risk - Urgent Action' : 
                     avgGlobalWarming > 30 ? 'Medium Risk - Action Recommended' : 
                     'Low Risk - Monitor'}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </div>
          </div>

          {/* Analytics Chart */}
          {analyticsData.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {chartType === 'line' ? (
                    <LineChart className="h-5 w-5 text-gray-600" />
                  ) : chartType === 'bar' ? (
                    <BarChart3 className="h-5 w-5 text-gray-600" />
                  ) : (
                    <BarChart3 className="h-5 w-5 text-gray-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">Analytics Visualization</h3>
                </div>
                <div className="text-sm text-gray-500">
                  {dateRange.startDate} to {dateRange.endDate}
                </div>
              </div>
              
              <AnalyticsChartControl 
                chartType={chartType}
                setChartType={setChartType}
                dataType={dataType}
                setDataType={setDataType}
              />
              
              <div className="mt-6" ref={chartRef}>
                <AnalyticsChart 
                  analyticsData={analyticsData}
                  chartType={chartType}
                  dataType={dataType}
                  dateRange={dateRange}
                />
              </div>
            </div>
          )}

          {/* ML Analysis Suggestions */}
          {mlAnalysis && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-600 p-2 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">ML-Powered Suggestions</h3>
                    <p className="text-sm text-gray-600">Based on environmental impact analysis</p>
                  </div>
                </div>
                <div className="bg-indigo-100 px-3 py-1.5 rounded-lg">
                  <span className="text-xs text-indigo-700 font-medium">Date Range: {dateRange.startDate} to {dateRange.endDate}</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Environmental Impact Summary</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Based on {analyticsData.length} data points from {dateRange.startDate} to {dateRange.endDate}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        mlAnalysis.pollution > 60 ? 'bg-red-500' : 
                        mlAnalysis.pollution > 40 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></span>
                      Pollution Level Analysis
                    </h5>
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
                    <p className="text-xs text-gray-500 mt-1">
                      {mlAnalysis.pollution > 60 
                        ? 'Critical level - Immediate action required' 
                        : mlAnalysis.pollution > 40 
                          ? 'Elevated level - Monitoring and action recommended' 
                          : 'Acceptable level - Continue current practices'}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        mlAnalysis.globalWarmingImpact > 50 ? 'bg-red-500' : 
                        mlAnalysis.globalWarmingImpact > 30 ? 'bg-orange-500' : 'bg-green-500'
                      }`}></span>
                      Global Warming Impact
                    </h5>
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
                    <p className="text-xs text-gray-500 mt-1">
                      {mlAnalysis.globalWarmingImpact > 50 
                        ? 'High risk - Significant environmental impact' 
                        : mlAnalysis.globalWarmingImpact > 30 
                          ? 'Medium risk - Moderate environmental impact' 
                          : 'Low risk - Minimal environmental impact'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {mlAnalysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-indigo-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{suggestion}</p>
                  </div>
                ))}
                <div className="mt-2 text-right">
                  <p className="text-xs text-gray-500 italic">
                    Suggestions generated based on data from {dateRange.startDate} to {dateRange.endDate}
                  </p>
                </div>
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
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${avgPollution > 50 ? 'text-red-600' : avgPollution > 30 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {avgPollution.toFixed(1)}/100
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded ${avgPollution > 50 ? 'bg-red-100 text-red-800' : avgPollution > 30 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {avgPollution > 50 ? 'Critical' : avgPollution > 30 ? 'Elevated' : 'Low'}
                      </span>
                    </div>
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
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${avgGlobalWarming > 40 ? 'text-red-600' : avgGlobalWarming > 25 ? 'text-orange-600' : 'text-green-600'}`}>
                        {avgGlobalWarming.toFixed(1)}/100
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded ${avgGlobalWarming > 40 ? 'bg-red-100 text-red-800' : avgGlobalWarming > 25 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                        {avgGlobalWarming > 40 ? 'High Risk' : avgGlobalWarming > 25 ? 'Medium Risk' : 'Low Risk'}
                      </span>
                    </div>
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

      {!loading && !hasSearched && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Date Range to View Analytics</h3>
          <p className="text-gray-600">Choose your desired date range and click "Apply Filter" to analyze waste data with our ML model.</p>
        </div>
      )}

      {/* Hidden PDF Content - includes all report content without filters and download button */}
      {showTable && !loading && analyticsData.length > 0 && (
        <div ref={pdfContentRef} style={{ position: 'absolute', left: '-9999px', top: 0, width: '800px', backgroundColor: '#ffffff' }}>
          <div style={{ padding: '20px' }}>
            {/* Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', marginBottom: '20px' }}>
              <div style={{ background: 'linear-gradient(to right, #10b981, #059669)', borderRadius: '10px', padding: '15px', color: 'white' }}>
                <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.9 }}>Total Wet Waste</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{totalOrganic.toFixed(1)} kg</div>
              </div>

              <div style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)', borderRadius: '10px', padding: '15px', color: 'white' }}>
                <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.9 }}>Total Dry Waste</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{totalInorganic.toFixed(1)} kg</div>
              </div>

              <div style={{ background: 'linear-gradient(to right, #8b5cf6, #7c3aed)', borderRadius: '10px', padding: '15px', color: 'white' }}>
                <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.9 }}>Total Weight</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{totalWeight.toFixed(1)} kg</div>
              </div>

              <div style={{ background: 'linear-gradient(to right, #ef4444, #dc2626)', borderRadius: '10px', padding: '15px', color: 'white' }}>
                <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.9 }}>Pollution Level</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{avgPollution.toFixed(1)}/100</div>
                <div style={{ fontSize: '9px', marginTop: '3px', opacity: 0.9 }}>
                  {avgPollution > 60 ? 'Critical - Action Required' : 
                   avgPollution > 40 ? 'Elevated - Monitoring Needed' : 
                   'Acceptable Range'}
                </div>
              </div>

              <div style={{ background: 'linear-gradient(to right, #f97316, #ea580c)', borderRadius: '10px', padding: '15px', color: 'white' }}>
                <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.9 }}>Global Warming Impact</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{avgGlobalWarming.toFixed(1)}/100</div>
                <div style={{ fontSize: '9px', marginTop: '3px', opacity: 0.9 }}>
                  {avgGlobalWarming > 50 ? 'High Risk - Urgent Action' : 
                   avgGlobalWarming > 30 ? 'Medium Risk - Action Recommended' : 
                   'Low Risk - Monitor'}
                </div>
              </div>
            </div>

            {/* Waste Data Chart */}
            <div style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '20px', marginBottom: '20px' }}>
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>Waste Data Analysis</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                  {dateRange.startDate} to {dateRange.endDate}
                </div>
              </div>
              <div style={{ height: '300px' }}>
                <AnalyticsChart 
                  analyticsData={analyticsData}
                  chartType="line"
                  dataType="waste"
                  dateRange={dateRange}
                />
              </div>
            </div>

            {/* Environmental Impact Chart */}
            <div style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '20px', marginBottom: '20px' }}>
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>Environmental Impact Analysis</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                  {dateRange.startDate} to {dateRange.endDate}
                </div>
              </div>
              <div style={{ height: '300px' }}>
                <AnalyticsChart 
                  analyticsData={analyticsData}
                  chartType="line"
                  dataType="environmental"
                  dateRange={dateRange}
                />
              </div>
            </div>

            {/* Composition Charts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              {/* Waste Composition */}
              <div style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '20px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '15px' }}>Waste Composition Analysis</div>
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                    <span style={{ color: '#6b7280' }}>Wet Waste Container</span>
                    <span style={{ fontWeight: 'bold', color: '#10b981' }}>{((totalOrganic / totalWeight) * 100).toFixed(1)}%</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '10px', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: '#10b981', height: '10px', width: `${(totalOrganic / totalWeight) * 100}%` }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                    <span style={{ color: '#6b7280' }}>Dry Waste Container</span>
                    <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>{((totalInorganic / totalWeight) * 100).toFixed(1)}%</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '10px', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: '#3b82f6', height: '10px', width: `${(totalInorganic / totalWeight) * 100}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '20px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '15px' }}>Environmental Impact Levels</div>
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                    <span style={{ color: '#6b7280' }}>Pollution Level</span>
                    <span style={{ fontWeight: 'bold', color: avgPollution > 50 ? '#ef4444' : avgPollution > 30 ? '#eab308' : '#10b981' }}>
                      {avgPollution.toFixed(1)}/100
                    </span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      backgroundColor: avgPollution > 50 ? '#ef4444' : avgPollution > 30 ? '#eab308' : '#10b981', 
                      height: '10px', 
                      width: `${Math.min(avgPollution, 100)}%` 
                    }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                    <span style={{ color: '#6b7280' }}>Global Warming Impact</span>
                    <span style={{ fontWeight: 'bold', color: avgGlobalWarming > 40 ? '#ef4444' : avgGlobalWarming > 25 ? '#f97316' : '#10b981' }}>
                      {avgGlobalWarming.toFixed(1)}/100
                    </span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      backgroundColor: avgGlobalWarming > 40 ? '#ef4444' : avgGlobalWarming > 25 ? '#f97316' : '#10b981', 
                      height: '10px', 
                      width: `${Math.min(avgGlobalWarming, 100)}%` 
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};