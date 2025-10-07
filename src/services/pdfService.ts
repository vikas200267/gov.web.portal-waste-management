import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { WasteData, AnalyticsData } from '../types';

interface PdfServiceOptions {
  title: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  suggestions?: string[];
}

interface AnalyticsPdfData {
  analyticsData: AnalyticsData[];
  totalOrganic: number;
  totalInorganic: number;
  totalWeight: number;
  avgPollution: number;
  avgGlobalWarming: number;
}

export const pdfService = {
  async generateWasteReport(
    data: WasteData[], 
    chartElement: HTMLElement | null,
    options: PdfServiceOptions
  ) {
    // Return early if no data
    if (data.length === 0) {
      console.error("Cannot generate PDF: No data");
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

      // Try to capture chart as image if chartElement is provided
      if (chartElement) {
        try {
          const canvas = await html2canvas(chartElement, {
            scale: 2,
            logging: false,
            useCORS: true,
            backgroundColor: '#ffffff',
            allowTaint: true
          });
          
          const chartImgData = canvas.toDataURL('image/png');
          
          // Calculate chart dimensions to fit on page
          const chartWidth = pageWidth - 40; // 20mm margin on each side
          const chartHeight = (canvas.height * chartWidth) / canvas.width;
          
          // Add chart to PDF
          pdf.addImage(chartImgData, 'PNG', 20, yPos, chartWidth, chartHeight);
          yPos += chartHeight + 15;
        } catch (err) {
          console.error('Error capturing chart:', err);
          // Add a message if chart capture failed
          pdf.setFontSize(12);
          pdf.setTextColor(150, 0, 0);
          pdf.text('Chart visualization not available', pageWidth / 2, yPos + 20, { align: 'center' });
          yPos += 40; // Add some space
        }
      } else {
        // Add a message if chart element is not provided
        pdf.setFontSize(12);
        pdf.setTextColor(100);
        pdf.text('Chart visualization not available', pageWidth / 2, yPos + 20, { align: 'center' });
        yPos += 40; // Add some space
      }

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
      autoTable(pdf, {
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
      autoTable(pdf, {
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
  },

  async generateAnalyticsReport(
    pdfData: AnalyticsPdfData,
    pdfContentElement: HTMLElement | null,
    options: PdfServiceOptions
  ) {
    // Return early if no data
    if (pdfData.analyticsData.length === 0) {
      console.error("Cannot generate PDF: No data");
      return;
    }

    try {
      // Initialize PDF
      const pdf = new jsPDF('portrait', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      let yPos = 15;

      // Add title
      pdf.setFontSize(20);
      pdf.setTextColor(44, 62, 80);
      pdf.text(options.title, pageWidth / 2, yPos, { align: 'center' });
      yPos += 8;

      // Add subtitle
      pdf.setFontSize(11);
      pdf.setTextColor(100, 100, 100);
      pdf.text('ML-powered pollution and global warming impact analysis', pageWidth / 2, yPos, { align: 'center' });
      yPos += 10;

      // Add date range
      pdf.setFontSize(10);
      pdf.setTextColor(120);
      const dateText = `Date Range: ${options.dateRange.startDate} to ${options.dateRange.endDate}`;
      pdf.text(dateText, pageWidth / 2, yPos, { align: 'center' });
      yPos += 12;

      // Capture the PDF content element (which includes summary cards and charts)
      if (pdfContentElement) {
        try {
          const canvas = await html2canvas(pdfContentElement, {
            scale: 1.5,
            logging: false,
            useCORS: true,
            backgroundColor: '#ffffff',
            allowTaint: true,
            windowWidth: pdfContentElement.scrollWidth,
            windowHeight: pdfContentElement.scrollHeight
          });
          
          const imgData = canvas.toDataURL('image/png');
          
          // Calculate dimensions to fit on page
          const imgWidth = pageWidth - 30;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // Check if content fits on one page
          if (yPos + imgHeight > pageHeight - 20) {
            // Content is too tall, split across pages
            const maxHeightFirstPage = pageHeight - yPos - 15;
            const firstPageImgHeight = maxHeightFirstPage;
            const firstPageCanvasHeight = (canvas.width * firstPageImgHeight) / imgWidth;
            
            // First page content
            pdf.addImage(imgData, 'PNG', 15, yPos, imgWidth, firstPageImgHeight, undefined, 'FAST');
            
            // Calculate remaining content
            let remainingHeight = imgHeight - firstPageImgHeight;
            let currentCanvasY = firstPageCanvasHeight;
            
            while (remainingHeight > 0) {
              pdf.addPage();
              yPos = 15;
              const pageContentHeight = Math.min(remainingHeight, pageHeight - 30);
              
              // Create a temporary canvas for the remaining portion
              const tempCanvas = document.createElement('canvas');
              tempCanvas.width = canvas.width;
              tempCanvas.height = (canvas.width * pageContentHeight) / imgWidth;
              const tempCtx = tempCanvas.getContext('2d');
              
              if (tempCtx) {
                tempCtx.drawImage(
                  canvas, 
                  0, currentCanvasY, canvas.width, tempCanvas.height,
                  0, 0, tempCanvas.width, tempCanvas.height
                );
                
                const tempImgData = tempCanvas.toDataURL('image/png');
                pdf.addImage(tempImgData, 'PNG', 15, yPos, imgWidth, pageContentHeight, undefined, 'FAST');
              }
              
              currentCanvasY += tempCanvas.height;
              remainingHeight -= pageContentHeight;
            }
            
            yPos = pageHeight - 20;
          } else {
            // Content fits on one page
            pdf.addImage(imgData, 'PNG', 15, yPos, imgWidth, imgHeight, undefined, 'FAST');
            yPos += imgHeight + 10;
          }
        } catch (err) {
          console.error('Error capturing content:', err);
          pdf.setFontSize(12);
          pdf.setTextColor(150, 0, 0);
          pdf.text('Content visualization not available', pageWidth / 2, yPos + 20, { align: 'center' });
          yPos += 40;
        }
      }

      // Add ML Analysis Suggestions on a new page
      if (options.suggestions && options.suggestions.length > 0) {
        pdf.addPage();
        yPos = 20;
        
        pdf.setFontSize(16);
        pdf.setTextColor(44, 62, 80);
        pdf.text('ML-Powered Suggestions', 20, yPos);
        yPos += 8;
        
        pdf.setFontSize(10);
        pdf.setTextColor(120);
        pdf.text('Based on environmental impact analysis', 20, yPos);
        yPos += 12;

        // Add environmental impact summary box
        pdf.setFillColor(250, 250, 255);
        pdf.rect(15, yPos, pageWidth - 30, 35, 'F');
        pdf.setDrawColor(200, 200, 220);
        pdf.rect(15, yPos, pageWidth - 30, 35, 'S');
        
        yPos += 8;
        pdf.setFontSize(11);
        pdf.setTextColor(60, 60, 60);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Environmental Impact Summary', 20, yPos);
        yPos += 6;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.text(`Based on ${pdfData.analyticsData.length} data points from ${options.dateRange.startDate} to ${options.dateRange.endDate}`, 20, yPos);
        yPos += 8;
        
        // Pollution level
        const pollutionStatus = pdfData.avgPollution > 60 ? 'Critical' : pdfData.avgPollution > 40 ? 'Elevated' : 'Acceptable';
        pdf.setFontSize(9);
        pdf.text(`Pollution Level: ${pdfData.avgPollution.toFixed(1)}/100 - ${pollutionStatus}`, 20, yPos);
        yPos += 5;
        
        // Global warming impact
        const gwStatus = pdfData.avgGlobalWarming > 50 ? 'High Risk' : pdfData.avgGlobalWarming > 30 ? 'Medium Risk' : 'Low Risk';
        pdf.text(`Global Warming Impact: ${pdfData.avgGlobalWarming.toFixed(1)}/100 - ${gwStatus}`, 20, yPos);
        yPos += 12;

        // Add suggestions
        pdf.setFontSize(11);
        pdf.setTextColor(44, 62, 80);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Recommendations:', 20, yPos);
        yPos += 8;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(60, 60, 60);
        
        options.suggestions.forEach((suggestion, index) => {
          // Check if we need a new page
          if (yPos > pageHeight - 25) {
            pdf.addPage();
            yPos = 20;
          }
          
          const bulletPoint = `${index + 1}.`;
          pdf.text(bulletPoint, 20, yPos);
          
          const lines = pdf.splitTextToSize(suggestion, pageWidth - 50);
          pdf.text(lines, 28, yPos);
          
          yPos += 6 * lines.length + 3;
        });
      }

      // Add detailed data table on a new page
      pdf.addPage();
      yPos = 20;

      pdf.setFontSize(14);
      pdf.setTextColor(44, 62, 80);
      pdf.text('Detailed Analytics Data', 20, yPos);
      yPos += 8;

      // Format data for table
      const tableRows = pdfData.analyticsData.map(item => [
        item.date,
        item.organicWeight.toFixed(2),
        item.inorganicWeight.toFixed(2),
        item.totalWeight.toFixed(2),
        item.pollution.toFixed(1),
        item.globalWarmingImpact.toFixed(1)
      ]);

      // Add the data table
      autoTable(pdf, {
        startY: yPos,
        head: [['Date', 'Wet Waste (kg)', 'Dry Waste (kg)', 'Total (kg)', 'Pollution', 'GW Impact']],
        body: tableRows,
        headStyles: { 
          fillColor: [59, 130, 246],
          fontSize: 9,
          fontStyle: 'bold'
        },
        bodyStyles: {
          fontSize: 8
        },
        margin: { top: 10, right: 15, bottom: 15, left: 15 },
        theme: 'striped',
        columnStyles: {
          0: { cellWidth: 30 },
          1: { cellWidth: 25 },
          2: { cellWidth: 25 },
          3: { cellWidth: 25 },
          4: { cellWidth: 25 },
          5: { cellWidth: 25 }
        }
      });

      // Add footer with generation timestamp on each page
      const now = new Date();
      const timestamp = `Generated on: ${now.toLocaleString()}`;
      const pageCount = (pdf as any).internal.getNumberOfPages();
      
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(150);
        pdf.text(timestamp, pageWidth - 15, pageHeight - 8, { align: 'right' });
        pdf.text(`Page ${i} of ${pageCount}`, 15, pageHeight - 8);
      }

      // Save PDF
      pdf.save(`analytics-report-${options.dateRange.startDate}-${options.dateRange.endDate}.pdf`);
      return true;
    } catch (error) {
      console.error('Error generating analytics PDF report:', error);
      return false;
    }
  }
};