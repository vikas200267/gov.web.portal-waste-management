import { WasteData, AnalyticsData, MLAnalysis } from '../types';
import { database } from '../config/firebase';
import { ref, onValue, off } from 'firebase/database';

// ML model for calculating pollution and global warming impact
const calculateEnvironmentalImpact = (data: WasteData[]): MLAnalysis => {
  if (data.length === 0) {
    return {
      pollution: 0,
      globalWarmingImpact: 0,
      suggestions: ['No data available for analysis']
    };
  }

  // Calculate averages for ML model input
  const avgOrganic = data.reduce((sum, item) => sum + item.organicWeight, 0) / data.length;
  const avgInorganic = data.reduce((sum, item) => sum + item.inorganicWeight, 0) / data.length;
  const avgMQ9 = data.reduce((sum, item) => sum + item.mq9, 0) / data.length;
  const avgMQ7 = data.reduce((sum, item) => sum + item.mq7, 0) / data.length;
  const avgMQ135 = data.reduce((sum, item) => sum + item.mq135, 0) / data.length;
  const avgTemperature = data.reduce((sum, item) => sum + item.temperature, 0) / data.length;
  const avgHumidity = data.reduce((sum, item) => sum + item.humidity, 0) / data.length;

  // Mock ML model calculations
  const pollution = (
    (avgInorganic * 0.4) + 
    (avgMQ9 * 0.3) + 
    (avgMQ7 * 0.2) + 
    (avgMQ135 * 0.1) + 
    (avgTemperature * 0.05) - 
    (avgHumidity * 0.02)
  ) * 1.2;

  const globalWarmingImpact = (
    (avgOrganic * 0.3) + 
    (avgInorganic * 0.5) + 
    (avgMQ9 * 0.15) + 
    (avgMQ135 * 0.05) + 
    (avgTemperature * 0.1)
  ) * 0.8;

  // Generate suggestions based on levels
  const suggestions: string[] = [];
  
  if (pollution > 60) {
    suggestions.push('High pollution detected! Consider immediate waste reduction measures.');
    suggestions.push('Implement better waste segregation practices.');
    suggestions.push('Increase frequency of waste collection in high-pollution areas.');
  } else if (pollution > 40) {
    suggestions.push('Moderate pollution levels. Monitor waste disposal patterns.');
    suggestions.push('Consider implementing recycling programs.');
  } else {
    suggestions.push('Pollution levels are within acceptable range.');
    suggestions.push('Continue current waste management practices.');
  }

  if (globalWarmingImpact > 50) {
    suggestions.push('High global warming impact! Focus on organic waste composting.');
    suggestions.push('Reduce inorganic waste generation through reuse initiatives.');
  } else if (globalWarmingImpact > 30) {
    suggestions.push('Moderate environmental impact. Consider green waste management.');
  } else {
    suggestions.push('Environmental impact is minimal. Good waste management practices.');
  }

  if (avgMQ9 > 50) {
    suggestions.push('High CO levels detected. Improve ventilation in waste storage areas.');
  }

  if (avgMQ7 > 45) {
    suggestions.push('Elevated CO levels. Check for combustion sources near waste containers.');
  }

  if (avgMQ135 > 40) {
    suggestions.push('Air quality concerns detected. Consider air purification systems.');
  }

  return {
    pollution: Math.max(0, Math.min(100, Math.round(pollution * 100) / 100)),
    globalWarmingImpact: Math.max(0, Math.min(100, Math.round(globalWarmingImpact * 100) / 100)),
    suggestions: suggestions.slice(0, 5) // Limit to 5 suggestions
  };
};

// Generate mock sensor data for development
const generateMockData = (): WasteData[] => {
  const data: WasteData[] = [];
  const now = new Date();
  const areaCodes = ['A001', 'A002', 'A003', 'A004', 'A005'];
  
  for (let i = 0; i < 30; i++) {
    const timestamp = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const organicWeight = Math.random() * 50 + 10; // 10-60 kg
    const inorganicWeight = Math.random() * 40 + 5; // 5-45 kg
    
    data.push({
      id: `waste-${i}`,
      timestamp,
      organicWeight: Math.round(organicWeight * 100) / 100,
      inorganicWeight: Math.round(inorganicWeight * 100) / 100,
      totalWeight: Math.round((organicWeight + inorganicWeight) * 100) / 100,
      humidity: Math.round((Math.random() * 40 + 30) * 100) / 100, // 30-70%
      temperature: Math.round((Math.random() * 20 + 15) * 100) / 100, // 15-35°C
      mq9: Math.round((Math.random() * 60 + 10) * 100) / 100, // 10-70 ppm
      mq7: Math.round((Math.random() * 50 + 5) * 100) / 100, // 5-55 ppm
      mq135: Math.round((Math.random() * 45 + 15) * 100) / 100, // 15-60 ppm
      areaCode: areaCodes[i % areaCodes.length],
    });
  }
  
  return data.reverse();
};

// Store dashboard data for analytics
let dashboardData: WasteData[] = [];

export const wasteDataService = {
  // Real-time Firebase listener for dashboard
  subscribeToRealtimeData(callback: (data: WasteData[]) => void): () => void {
    try {
      const dataRef = ref(database, 'wasteData');
      
      const unsubscribe = onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
          const firebaseData = snapshot.val();
          const formattedData: WasteData[] = Object.keys(firebaseData).map(key => ({
            ...firebaseData[key],
            id: key,
            timestamp: new Date(firebaseData[key].timestamp),
          }));
          
          dashboardData = formattedData;
          callback(formattedData);
        } else {
          // Fallback to mock data if Firebase is not configured
          console.warn('Firebase not configured properly, using mock data');
          const mockData = generateMockData();
          dashboardData = mockData;
          callback(mockData);
        }
      }, (error) => {
        console.error('Firebase error, using mock data:', error);
        const mockData = generateMockData();
        dashboardData = mockData;
        callback(mockData);
      });

      return () => off(dataRef, 'value', unsubscribe);
    } catch (error) {
      console.error('Firebase connection error, using mock data:', error);
      // Fallback to mock data
      const mockData = generateMockData();
      dashboardData = mockData;
      callback(mockData);
      
      // Return empty unsubscribe function
      return () => {};
    }
  },

  // Get analytics data from dashboard data with ML analysis
  async getAnalyticsData(startDate: string, endDate: string): Promise<{ data: AnalyticsData[], analysis: MLAnalysis }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Filter dashboard data by date range
    const filteredData = dashboardData.filter(item => {
      const itemDate = new Date(item.timestamp);
      return itemDate >= start && itemDate <= end;
    });
    
    // Calculate ML analysis
    const analysis = calculateEnvironmentalImpact(filteredData);
    
    // Format data for analytics table
    const analyticsData: AnalyticsData[] = filteredData.map(item => ({
      date: item.timestamp.toISOString().split('T')[0],
      organicWeight: item.organicWeight,
      inorganicWeight: item.inorganicWeight,
      totalWeight: item.totalWeight,
      pollution: 0, // Will be filled by ML model
      globalWarmingImpact: 0, // Will be filled by ML model
    }));

    // Apply ML model results to each data point (simplified)
    analyticsData.forEach(item => {
      item.pollution = analysis.pollution + (Math.random() - 0.5) * 10; // Add some variance
      item.globalWarmingImpact = analysis.globalWarmingImpact + (Math.random() - 0.5) * 8;
      item.pollution = Math.max(0, Math.min(100, Math.round(item.pollution * 100) / 100));
      item.globalWarmingImpact = Math.max(0, Math.min(100, Math.round(item.globalWarmingImpact * 100) / 100));
    });
    
    return { data: analyticsData, analysis };
  },
};