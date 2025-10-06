import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AnalyticsData, DateRange, MLAnalysis } from '../types';

interface AnalyticsContextType {
  analyticsData: AnalyticsData[];
  setAnalyticsData: React.Dispatch<React.SetStateAction<AnalyticsData[]>>;
  mlAnalysis: MLAnalysis | null;
  setMlAnalysis: React.Dispatch<React.SetStateAction<MLAnalysis | null>>;
  dateRange: DateRange;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>;
}

const defaultDateRange: DateRange = {
  startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
  endDate: new Date()
};

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [mlAnalysis, setMlAnalysis] = useState<MLAnalysis | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>(defaultDateRange);

  return (
    <AnalyticsContext.Provider 
      value={{
        analyticsData,
        setAnalyticsData,
        mlAnalysis,
        setMlAnalysis,
        dateRange,
        setDateRange
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};