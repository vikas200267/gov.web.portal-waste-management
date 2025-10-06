import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { WasteData } from '../types';

interface PdfServiceOptions {
  title: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  suggestions?: string[];
}

export const pdfService = {
  async generateWasteReport(
    data: WasteData[], 
    chartElement: HTMLElement | null,
    options: PdfServiceOptions
  ) {
    // Return early if no data
    if (data.length === 0 || !chartElement) {
      console.error("Cannot generate PDF: No data or chart element");
      return;
    }

    try {
      // Initialize PDF
      const pdf = new jsPDF('portrait', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      let yPos = 15;

      // Add title
      pdf.setFontSize(18);
      pdf.setTextColor(44, 62, 80);
      pdf.text(options.title, pageWidth / 2, yPos, { align: 'center' });
      yPos += 10;

      // Add date range
      pdf.setFontSize(12);
      pdf.setTextColor(100);
      const dateText = `Date Range: ${options.dateRange.startDate} to ${options.dateRange.endDate}`;
      pdf.text(dateText, pageWidth / 2, yPos, { align: 'center' });
      yPos += 15;

      // Capture chart as image
      const canvas = await html2canvas(chartElement, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const chartImgData = canvas.toDataURL('image/png');
      
      // Calculate chart dimensions to fit on page
      const chartWidth = pageWidth - 40; // 20mm margin on each side
      const chartHeight = (canvas.height * chartWidth) / canvas.width;
      
      // Add chart to PDF
      pdf.addImage(chartImgData, 'PNG', 20, yPos, chartWidth, chartHeight);
      yPos += chartHeight + 15;

      // Add summary statistics
      pdf.setFontSize(14);
      pdf.setTextColor(44, 62, 80);
      pdf.text('Summary Statistics', 20, yPos);
      yPos += 10;

      // Calculate summary stats
      const totalOrganic = data.reduce((sum, item) => sum + item.organicWeight, 0);
      const totalInorganic = data.reduce((sum, item) => sum + item.inorganicWeight, 0);
      const avgGasLevel = data.length > 0 
        ? data.reduce((sum, item) => sum + (item.methane || 0), 0) / data.length 
        : 0;
      const avgTemperature = data.length > 0 
        ? data.reduce((sum, item) => sum + (item.temperature || 0), 0) / data.length 
        : 0;
      const avgHumidity = data.length > 0 
        ? data.reduce((sum, item) => sum + (item.humidity || 0), 0) / data.length 
        : 0;

      // Add stats table
      (pdf as any).autoTable({
        startY: yPos,
        head: [['Metric', 'Value']],
        body: [
          ['Total Organic Waste (kg)', totalOrganic.toFixed(2)],
          ['Total Inorganic Waste (kg)', totalInorganic.toFixed(2)],
          ['Average Gas Level (ppm)', avgGasLevel.toFixed(2)],
          ['Average Temperature (°C)', avgTemperature.toFixed(2)],
          ['Average Humidity (%)', avgHumidity.toFixed(2)]
        ],
        headStyles: { fillColor: [46, 125, 50] },
        margin: { top: 10, right: 20, bottom: 10, left: 20 },
        theme: 'striped'
      });

      yPos = (pdf as any).lastAutoTable.finalY + 15;

      // Add suggestions if provided
      if (options.suggestions && options.suggestions.length > 0) {
        pdf.setFontSize(14);
        pdf.setTextColor(44, 62, 80);
        pdf.text('Recommendations & Insights', 20, yPos);
        yPos += 10;

        pdf.setFontSize(11);
        pdf.setTextColor(60, 60, 60);
        
        options.suggestions.forEach((suggestion, index) => {
          // Check if we need a new page
          if (yPos > pdf.internal.pageSize.getHeight() - 20) {
            pdf.addPage();
            yPos = 20;
          }
          
          pdf.text(`${index + 1}. ${suggestion}`, 20, yPos, {
            maxWidth: pageWidth - 40
          });
          
          // Estimate lines of text and increase yPos accordingly
          const textLines = Math.ceil(pdf.getTextWidth(suggestion) / (pageWidth - 40));
          yPos += 6 * textLines + 4;
        });
      }

      // Add data table
      yPos += 10;
      if (yPos > pdf.internal.pageSize.getHeight() - 40) {
        pdf.addPage();
        yPos = 20;
      }

      pdf.setFontSize(14);
      pdf.setTextColor(44, 62, 80);
      pdf.text('Detailed Data', 20, yPos);
      yPos += 5;

      // Format data for table
      const tableRows = data.map(item => {
        // Format date from timestamp
        const date = item.timestamp instanceof Date 
          ? item.timestamp.toLocaleDateString() 
          : new Date(item.timestamp).toLocaleDateString();
          
        return [
          date,
          item.organicWeight.toFixed(2),
          item.inorganicWeight.toFixed(2),
          item.totalWeight.toFixed(2),
          (item.methane || 0).toFixed(2),
          item.temperature.toFixed(1)
        ];
      });

      // Add the data table
      (pdf as any).autoTable({
        startY: yPos,
        head: [['Date', 'Organic (kg)', 'Inorganic (kg)', 'Total (kg)', 'Gas (ppm)', 'Temp (°C)']],
        body: tableRows,
        headStyles: { fillColor: [46, 125, 50] },
        margin: { top: 10, right: 20, bottom: 10, left: 20 },
        theme: 'striped'
      });

      // Add footer with generation timestamp
      const now = new Date();
      const timestamp = `Generated on: ${now.toLocaleString()}`;
      pdf.setFontSize(8);
      pdf.setTextColor(150);
      pdf.text(timestamp, pageWidth - 20, pdf.internal.pageSize.getHeight() - 10, { align: 'right' });

      // Save PDF
      pdf.save(`waste-report-${options.dateRange.startDate}-${options.dateRange.endDate}.pdf`);
      return true;
    } catch (error) {
      console.error('Error generating PDF report:', error);
      return false;
    }
  }
};