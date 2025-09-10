export interface User {
  id: string;
  email: string;
  name: string;
}

export interface WasteData {
  id: string;
  timestamp: Date;
  organicWeight: number;
  inorganicWeight: number;
  totalWeight: number;
  humidity: number;
  temperature: number;
  mq9: number;
  mq7: number;
  mq135: number;
  areaCode: string;
}

export interface AnalyticsData {
  date: string;
  organicWeight: number;
  inorganicWeight: number;
  totalWeight: number;
  pollution: number;
  globalWarmingImpact: number;
}

export interface MLAnalysis {
  pollution: number;
  globalWarmingImpact: number;
  suggestions: string[];
}

export interface DateRange {
  startDate: string;
  endDate: string;
}