// ML API Service for calling the Flask backend
const ML_API_URL = 'http://127.0.0.1:5001';

export interface MLPredictionRequest {
  startDate: string;
  endDate: string;
}

export interface MLDetailedData {
  Date: string;
  'Wet Waste Container Weight (kg)': string;
  'Dry Waste Container Weight (kg)': string;
  'Total Weight (kg)': string;
  'Pollution Level': number;
  'Global Warming Impact': number;
}

export interface MLPredictionResponse {
  'Environmental Impact Levels': {
    'Pollution Level': string;
    'Global Warming Impact': string;
  };
  'Detailed Analytics Data (ML Processed)': MLDetailedData[];
}

class MLApiService {
  /**
   * Get ML predictions from the Flask backend
   * @param startDate Start date for filtering
   * @param endDate End date for filtering
   * @param wasteData Optional array of waste data to send directly to ML API
   */
  async getPredictions(startDate: string, endDate: string, wasteData?: any[]): Promise<MLPredictionResponse> {
    try {
      console.log(`MLApiService: Requesting predictions for ${startDate} to ${endDate}`);
      if (wasteData) {
        console.log(`MLApiService: Sending ${wasteData.length} records to ML API`);
      }
      
      const requestBody: any = {
        startDate,
        endDate,
      };
      
      // Include wasteData if provided
      if (wasteData && wasteData.length > 0) {
        requestBody.wasteData = wasteData;
      }
      
      const response = await fetch(`${ML_API_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData.error || errorData['Detailed Analytics Data (ML Processed)']?.length === 0) {
          console.warn('MLApiService: No data available from ML API');
          throw new Error('NO_DATA');
        }
        throw new Error(`ML API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Check if response has no data
      if (data['Detailed Analytics Data (ML Processed)']?.length === 0) {
        console.warn('MLApiService: ML API returned empty data');
        throw new Error('NO_DATA');
      }
      
      console.log('MLApiService: Received predictions:', data);
      return data;
    } catch (error) {
      console.error('MLApiService: Error fetching predictions:', error);
      throw error;
    }
  }

  /**
   * Check if ML API is available
   */
  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${ML_API_URL}/predict`, {
        method: 'GET',
      });
      return response.ok;
    } catch (error) {
      console.error('MLApiService: ML API is not available:', error);
      return false;
    }
  }
}

export const mlApiService = new MLApiService();
