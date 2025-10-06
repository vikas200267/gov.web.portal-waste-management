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
  const avgMethane = data.reduce((sum, item) => sum + (item.methane || 0), 0) / data.length;
  const avgCarbonMonoxide = data.reduce((sum, item) => sum + (item.carbonMonoxide || 0), 0) / data.length;
  const avgAmmonia = data.reduce((sum, item) => sum + (item.ammonia || 0), 0) / data.length;
  const avgSulfide = data.reduce((sum, item) => sum + (item.sulfide || 0), 0) / data.length;
  const avgBenzene = data.reduce((sum, item) => sum + (item.benzene || 0), 0) / data.length;
  const avgTemperature = data.reduce((sum, item) => sum + item.temperature, 0) / data.length;
  const avgHumidity = data.reduce((sum, item) => sum + item.humidity, 0) / data.length;

  // Mock ML model calculations
  const pollution = (
    (avgInorganic * 0.4) + 
    (avgCarbonMonoxide * 0.3) + 
    (avgAmmonia * 0.2) + 
    (avgSulfide * 0.1) + 
    (avgBenzene * 0.1) + 
    (avgTemperature * 0.05) - 
    (avgHumidity * 0.02)
  ) * 1.2;

  const globalWarmingImpact = (
    (avgOrganic * 0.3) + 
    (avgInorganic * 0.5) + 
    (avgMethane * 0.15) + 
    (avgCarbonMonoxide * 0.05) + 
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

  if (avgMethane > 50) {
    suggestions.push('High methane levels detected. Improve ventilation in waste storage areas.');
  }

  if (avgCarbonMonoxide > 45) {
    suggestions.push('Elevated carbon monoxide levels. Check for combustion sources near waste containers.');
  }

  if (avgAmmonia > 40) {
    suggestions.push('Air quality concerns detected. High ammonia levels. Consider air purification systems.');
  }
  
  if (avgSulfide > 40) {
    suggestions.push('Elevated hydrogen sulfide levels detected. Ensure proper waste containment.');
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
    
    // Random chance to have zero weight for testing
    const hasZeroWeight = Math.random() < 0.3; // 30% chance of zero weight
    
    // Prepare gas sensor data
    const methane = Math.round((Math.random() * 60 + 10) * 100) / 100; // 10-70 ppm
    const ammonia = Math.round((Math.random() * 45 + 15) * 100) / 100; // 15-60 ppm
    const sulfide = Math.round((Math.random() * 40 + 10) * 100) / 100; // 10-50 ppm
    const benzene = Math.round((Math.random() * 35 + 5) * 100) / 100; // 5-40 ppm
    const carbonMonoxide = Math.round((Math.random() * 50 + 5) * 100) / 100; // 5-55 ppm
    
    // Determine organic and inorganic weights based on zero weight logic
    let organicWeight: number;
    let inorganicWeight: number;
    
    if (hasZeroWeight) {
      // For demonstrating zero weight scenario, assign weights based on gas readings
      const hasWetWasteGases = methane > 0 || ammonia > 0 || sulfide > 0 || benzene > 0;
      const hasDryWasteGases = carbonMonoxide > 0;
      
      if (hasWetWasteGases && !hasDryWasteGases) {
        // Only wet waste detected
        organicWeight = Math.round((Math.random() * 25) * 100) / 100;
        inorganicWeight = 0;
      } else if (!hasWetWasteGases && hasDryWasteGases) {
        // Only dry waste detected
        organicWeight = 0;
        inorganicWeight = Math.round((Math.random() * 25) * 100) / 100;
      } else if (hasWetWasteGases && hasDryWasteGases) {
        // Both detected, randomly assign one type
        if (Math.random() < 0.5) {
          organicWeight = Math.round((Math.random() * 25) * 100) / 100;
          inorganicWeight = 0;
        } else {
          organicWeight = 0;
          inorganicWeight = Math.round((Math.random() * 25) * 100) / 100;
        }
      } else {
        // No gases detected
        organicWeight = 0;
        inorganicWeight = 0;
      }
    } else {
      // Normal data generation with non-zero weights
      organicWeight = Math.round((Math.random() * 50 + 10) * 100) / 100; // 10-60 kg
      inorganicWeight = Math.round((Math.random() * 40 + 5) * 100) / 100; // 5-45 kg
    }
    
    data.push({
      id: `waste-${i}`,
      timestamp,
      organicWeight,
      inorganicWeight,
      totalWeight: Math.round((organicWeight + inorganicWeight) * 100) / 100,
      humidity: Math.round((Math.random() * 40 + 30) * 100) / 100, // 30-70%
      temperature: Math.round((Math.random() * 20 + 15) * 100) / 100, // 15-35°C
      methane,
      ammonia,
      sulfide,
      benzene,
      carbonMonoxide,
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
      const dataRef = ref(database, 'waste_data');
      
      const unsubscribe = onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
          const firebaseData = snapshot.val();
          console.log("Firebase data structure:", firebaseData);
          
          // Process the nested structure of your data
          const formattedData: WasteData[] = [];
          
          // Process each location (Channasandra, Kengeri, etc.)
          Object.keys(firebaseData).forEach(location => {
            const locationData = firebaseData[location];
            
            // Process each type (organic, inorganic)
            Object.keys(locationData).forEach(wasteType => {
              const wasteTypeData = locationData[wasteType];
              
              // Process each entry in the waste type
              Object.keys(wasteTypeData).forEach(entryId => {
                const entry = wasteTypeData[entryId];
                
                // Check if we need to generate random weight when weight is zero
                const weight = Number(entry.weight || 0);
                let organicWeight = 0;
                let inorganicWeight = 0;
                
                // If weight is zero, generate a random weight based on sensor readings
                if (weight === 0) {
                  // Random weight between 0 and 25kg
                  const randomWeight = Math.random() * 25;
                  
                  if (wasteType === 'wet') {
                    // Check if any wet waste gas sensors have readings
                    const hasWetWasteGases = 
                      Number(entry.ammonia || 0) > 0 || 
                      Number(entry.sulfide || 0) > 0 || 
                      Number(entry.benzene || 0) > 0 || 
                      Number(entry.methane || 0) > 0;
                    
                    if (hasWetWasteGases) {
                      organicWeight = Math.round(randomWeight * 100) / 100;
                      console.log(`Generated random weight ${organicWeight}kg for wet waste based on gas sensors`);
                    }
                  } else if (wasteType === 'dry') {
                    // Check if carbon monoxide sensor has readings
                    const hasDryWasteGases = Number(entry.carbonMonoxide || 0) > 0;
                    
                    if (hasDryWasteGases) {
                      inorganicWeight = Math.round(randomWeight * 100) / 100;
                      console.log(`Generated random weight ${inorganicWeight}kg for dry waste based on gas sensors`);
                    }
                  }
                } else {
                  // Use the actual weight from data
                  if (wasteType === 'wet') {
                    organicWeight = weight;
                  } else if (wasteType === 'dry') {
                    inorganicWeight = weight;
                  }
                }
                
                // Create a properly formatted data entry
                let dataEntry: WasteData = {
                  id: entryId,
                  timestamp: new Date(entry.timestamp.replace(' ', 'T')), // Convert to proper ISO format
                  organicWeight: organicWeight,
                  inorganicWeight: inorganicWeight,
                  totalWeight: organicWeight + inorganicWeight,
                  humidity: Number(entry.humidity || 0),
                  temperature: Number(entry.temperature || 0),
                  areaCode: location
                };
                
                // Add gas sensor readings based on waste type
                if (wasteType === 'wet') {
                  dataEntry = {
                    ...dataEntry,
                    ammonia: Number(entry.ammonia || 0),
                    sulfide: Number(entry.sulfide || 0),
                    benzene: Number(entry.benzene || 0),
                    methane: Number(entry.methane || 0)
                  };
                } else if (wasteType === 'dry') {
                  dataEntry = {
                    ...dataEntry,
                    carbonMonoxide: Number(entry.carbonMonoxide || 0)
                  };
                }
                
                formattedData.push(dataEntry);
              });
            });
          });
          
          console.log("Formatted data:", formattedData);
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
    
    // If dashboardData is empty, load data from Firebase or use mock data
    if (dashboardData.length === 0) {
      console.log("Analytics page: No dashboard data found. Loading data from Firebase...");
      
      try {
        // Create a promise that resolves when data is loaded
        await new Promise<void>((resolve) => {
          const dataRef = ref(database, 'waste_data');
          
          onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
              const firebaseData = snapshot.val();
              
              // Process the nested structure of your data
              const formattedData: WasteData[] = [];
              
              // Process each location (Channasandra, Kengeri, etc.)
              Object.keys(firebaseData).forEach(location => {
                const locationData = firebaseData[location];
                
                // Process each type (wet, dry)
                Object.keys(locationData).forEach(wasteType => {
                  const wasteTypeData = locationData[wasteType];
                  
                  // Process each entry in the waste type
                  Object.keys(wasteTypeData).forEach(entryId => {
                    const entry = wasteTypeData[entryId];
                    
                    // Check if we need to generate random weight when weight is zero
                    const weight = Number(entry.weight || 0);
                    let organicWeight = 0;
                    let inorganicWeight = 0;
                    
                    // If weight is zero, generate a random weight based on sensor readings
                    if (weight === 0) {
                      // Random weight between 0 and 25kg
                      const randomWeight = Math.random() * 25;
                      
                      if (wasteType === 'wet') {
                        // Check if any wet waste gas sensors have readings
                        const hasWetWasteGases = 
                          Number(entry.ammonia || 0) > 0 || 
                          Number(entry.sulfide || 0) > 0 || 
                          Number(entry.benzene || 0) > 0 || 
                          Number(entry.methane || 0) > 0;
                        
                        if (hasWetWasteGases) {
                          organicWeight = Math.round(randomWeight * 100) / 100;
                          console.log(`Analytics: Generated random weight ${organicWeight}kg for wet waste based on gas sensors`);
                        }
                      } else if (wasteType === 'dry') {
                        // Check if carbon monoxide sensor has readings
                        const hasDryWasteGases = Number(entry.carbonMonoxide || 0) > 0;
                        
                        if (hasDryWasteGases) {
                          inorganicWeight = Math.round(randomWeight * 100) / 100;
                          console.log(`Analytics: Generated random weight ${inorganicWeight}kg for dry waste based on gas sensors`);
                        }
                      }
                    } else {
                      // Use the actual weight from data
                      if (wasteType === 'wet') {
                        organicWeight = weight;
                      } else if (wasteType === 'dry') {
                        inorganicWeight = weight;
                      }
                    }
                    
                    // Create a properly formatted data entry
                    let dataEntry: WasteData = {
                      id: entryId,
                      timestamp: new Date(entry.timestamp.replace(' ', 'T')), // Convert to proper ISO format
                      organicWeight: organicWeight,
                      inorganicWeight: inorganicWeight,
                      totalWeight: organicWeight + inorganicWeight,
                      humidity: Number(entry.humidity || 0),
                      temperature: Number(entry.temperature || 0),
                      areaCode: location
                    };
                    
                    // Add gas sensor readings based on waste type
                    if (wasteType === 'wet') {
                      dataEntry = {
                        ...dataEntry,
                        ammonia: Number(entry.ammonia || 0),
                        sulfide: Number(entry.sulfide || 0),
                        benzene: Number(entry.benzene || 0),
                        methane: Number(entry.methane || 0)
                      };
                    } else if (wasteType === 'dry') {
                      dataEntry = {
                        ...dataEntry,
                        carbonMonoxide: Number(entry.carbonMonoxide || 0)
                      };
                    }
                    
                    formattedData.push(dataEntry);
                  });
                });
              });
              
              dashboardData = formattedData;
            } else {
              // Fallback to mock data if Firebase is not configured
              console.warn('Firebase not configured properly, using mock data');
              const mockData = generateMockData();
              dashboardData = mockData;
            }
            
            resolve();
          }, (error) => {
            console.error('Firebase error, using mock data:', error);
            const mockData = generateMockData();
            dashboardData = mockData;
            resolve();
          });
        });
      } catch (error) {
        console.error('Firebase connection error, using mock data:', error);
        const mockData = generateMockData();
        dashboardData = mockData;
      }
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Filter dashboard data by date range
    let filteredData = dashboardData.filter(item => {
      const itemDate = new Date(item.timestamp);
      return itemDate >= start && itemDate <= end;
    });
    
    console.log(`Analytics service: Filtered data for range ${startDate} to ${endDate}:`, filteredData.length, 'records');
    
    // If no data is available for the selected date range, return empty result
    if (filteredData.length === 0) {
      console.log('No data found for selected date range. Dashboard has no data for this period.');
      return {
        data: [],
        analysis: {
          pollution: 0,
          globalWarmingImpact: 0,
          suggestions: ['No data available for the selected date range. Please choose a different date range with available dashboard data.']
        }
      };
    }
    
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