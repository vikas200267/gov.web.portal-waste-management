# 🗑️ Government Waste Management Portal

A comprehensive web-based waste management system with real-time analytics, ML-powered environmental impact predictions, and professional PDF reporting capabilities.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [Usage Guide](#usage-guide)
7. [ML Model & API](#ml-model--api)
8. [PDF Report Feature](#pdf-report-feature)
9. [Troubleshooting](#troubleshooting)
10. [Technical Details](#technical-details)
11. [Development](#development)

---

## 🎯 Overview

This waste management portal provides government organizations with a powerful platform to:
- **Track waste data** in real-time across multiple collection areas
- **Analyze environmental impact** using ML-powered predictions
- **Generate professional reports** with comprehensive analytics
- **Visualize trends** with interactive charts and dashboards
- **Make data-driven decisions** for waste management strategies

### Technology Stack

**Frontend:**
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Chart.js for data visualization
- Firebase for real-time database

**Backend:**
- Flask API for ML predictions
- TensorFlow/Keras for neural networks
- Python 3.12+

**PDF Generation:**
- jsPDF for document creation
- html2canvas for chart capture
- jspdf-autotable for tables

---

## 🚀 Quick Start

### One-Command Setup

Run the entire application with a single command:

```bash
./start.sh
```

Or using npm:
```bash
npm run setup
```

This will:
1. ✅ Install all frontend dependencies (npm packages)
2. ✅ Install Python/ML backend dependencies
3. ✅ Start Flask ML API on port 5001
4. ✅ Start Vite React frontend on port 5173
5. ✅ Display logs from both servers

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend ML API**: http://localhost:5001/predict

### Stop All Servers

```bash
./stop.sh
```

Or using npm:
```bash
npm run stop
```

---

## ✨ Features

### 📊 Real-Time Dashboard
- Live waste collection data from multiple areas
- Interactive charts showing waste trends
- Summary cards with key metrics
- Date range filtering

### 🤖 ML-Powered Analytics
- **Pollution Level Prediction**: AI analysis of air quality based on waste composition
- **Global Warming Impact**: CO2 equivalent emissions calculation
- **Smart Recommendations**: Actionable insights based on data patterns
- Trained on real waste management data

### 📄 Professional PDF Reports
- **Comprehensive Analytics Export**: Download complete reports with one click
- **Multi-Page Support**: Automatically formatted for A4 paper
- **Visual Content**: Includes all charts and graphs
- **ML Insights**: Contains AI-generated recommendations
- **Detailed Data Tables**: Complete tabular data export

### 🎨 Modern UI/UX
- Dark/Light theme support
- Responsive design for all devices
- Intuitive navigation
- Real-time data updates

---

## 📁 Project Structure

```
gov.web.portal-waste-management/
├── 📄 data.csv                          # Waste data CSV file
├── 🚀 start.sh                          # One-command startup script
├── 🛑 stop.sh                           # Stop all servers
├── 📦 package.json                      # Frontend dependencies
│
├── 🤖 ml_model/                         # Machine Learning Backend
│   ├── __init__.py                      # Package initialization
│   ├── app.py                           # Flask API server
│   ├── waste_prediction_model.py       # ML model (TensorFlow)
│   ├── requirements.txt                 # Python dependencies
│   ├── flask.log                        # Server logs
│   └── README.md                        # ML documentation
│
├── 🎨 src/                              # React Frontend Source
│   ├── App.tsx                          # Main app component
│   ├── main.tsx                         # App entry point
│   │
│   ├── components/                      # React components
│   │   ├── Layout.tsx                   # Main layout wrapper
│   │   ├── ThemeToggle.tsx             # Dark/light mode toggle
│   │   ├── dashboard/                   # Dashboard page
│   │   │   ├── Dashboard.tsx
│   │   │   ├── DashboardChart.tsx
│   │   │   └── DashboardChartControl.tsx
│   │   ├── analytics/                   # Analytics page
│   │   │   ├── Analytics.tsx            # Main analytics component
│   │   │   ├── AnalyticsChart.tsx      # Chart visualization
│   │   │   └── AnalyticsChartControl.tsx
│   │   ├── auth/                        # Authentication pages
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── VerificationPage.tsx
│   │   └── about/                       # About page
│   │       └── About.tsx
│   │
│   ├── services/                        # Service layer
│   │   ├── pdfService.ts               # PDF generation
│   │   ├── mlApiService.ts             # ML API integration
│   │   ├── wasteDataService.ts         # Waste data operations
│   │   ├── userService.ts              # User management
│   │   └── customAuthService.ts        # Authentication
│   │
│   ├── context/                         # React Context
│   │   ├── AuthContext.tsx             # Authentication state
│   │   ├── ThemeContext.tsx            # Theme management
│   │   └── AnalyticsContext.tsx        # Analytics state
│   │
│   ├── config/                          # Configuration
│   │   └── firebase.ts                  # Firebase setup
│   │
│   └── types/                           # TypeScript types
│       └── index.ts                     # Type definitions
│
└── 📚 Documentation Files
    ├── README.md                        # This file
    ├── QUICKSTART.md                    # Quick start guide
    ├── SETUP_COMPLETE.md               # Setup completion details
    ├── PDF_ANALYTICS_FEATURE.md        # PDF feature docs
    ├── PDF_DOWNLOAD_FIX.md             # PDF fix details
    └── TESTING_PDF_DOWNLOAD.md         # Testing guide
```

---

## 🔧 Installation & Setup

### Prerequisites

Before you begin, ensure you have:
- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **Python** 3.12 or higher ([Download](https://python.org/))
- **npm** (comes with Node.js)
- **pip** (comes with Python)

Check your versions:
```bash
node --version    # Should be v18+
python3 --version # Should be 3.12+
```

### Automatic Setup (Recommended)

Simply run:
```bash
./start.sh
```

This handles everything automatically.

### Manual Setup (Alternative)

If you prefer manual control:

**1. Install Frontend Dependencies:**
```bash
npm install
```

**2. Install Backend Dependencies:**
```bash
cd ml_model
pip install -r requirements.txt
```

**3. Start Frontend:**
```bash
npm run dev
```

**4. Start Backend (in a new terminal):**
```bash
cd ml_model
python3 app.py
```

---

## 📖 Usage Guide

### Getting Started

1. **Launch the Application**
   ```bash
   ./start.sh
   ```

2. **Open Your Browser**
   - Navigate to http://localhost:5173
   - You'll see the login page

3. **Log In or Register**
   - Create a new account or log in with existing credentials
   - Email verification is supported

### Dashboard

The dashboard provides:
- **Real-time waste data** from collection areas
- **Interactive charts** with line/bar chart options
- **Date range filters** to view historical data
- **Summary metrics** for quick insights

**How to Use:**
1. Select a date range using the date pickers
2. Click "Apply Filter" to load data
3. Toggle between chart types (Line/Bar)
4. Switch between data views (Waste Data/Environmental)

### Analytics Page

The analytics page offers:
- **ML-powered predictions** for pollution and global warming
- **Environmental impact analysis** with visual indicators
- **Detailed data tables** with all metrics
- **AI-generated recommendations** for improvement

**How to Use:**
1. Navigate to "Analytics" in the menu
2. Select your desired date range
3. Click "Apply Filter" to run ML analysis
4. View the results in charts and tables
5. Click "Download Report" to generate PDF

### Generating PDF Reports

**Steps:**
1. Go to the Analytics page
2. Select a date range with available data
3. Click "Apply Filter" and wait for data to load
4. Click the green "Download Report" button
5. Wait 1-2 seconds for generation
6. PDF will download automatically

**What's Included in the PDF:**
- ✅ Summary cards with all key metrics
- ✅ Waste data chart (Wet/Dry/Total weight)
- ✅ Environmental impact chart (Pollution/Global Warming)
- ✅ Composition analysis with percentages
- ✅ ML-powered recommendations
- ✅ Complete data table
- ✅ Page numbers and timestamps

**PDF Filename Format:**
```
analytics-report-YYYY-MM-DD-YYYY-MM-DD.pdf
```

---

## 🤖 ML Model & API

### Overview

The ML backend provides AI-powered predictions using TensorFlow neural networks:

1. **Pollution Prediction Model**
   - Predicts air quality index (0-100 scale)
   - Analyzes pollutants: CO, NH₃, H₂S, Benzene, Particulates
   - Considers temperature and humidity effects

2. **Global Warming Impact Model**
   - Predicts CO₂ equivalent emissions (0-100 scale)
   - Analyzes methane emissions (28x more potent than CO₂)
   - Considers organic waste decomposition rates

### Model Architecture

Both models use Deep Neural Networks:
- **Input Layer**: 8 engineered features
- **Hidden Layers**: 
  - Layer 1: 16 neurons (ReLU activation)
  - Layer 2: 12 neurons (ReLU activation)
  - Layer 3: 8 neurons (ReLU activation)
- **Output Layer**: 1 neuron (Sigmoid activation)
- **Optimizer**: Adam (learning rate: 0.001)
- **Loss Function**: Mean Squared Error
- **Training**: 100 epochs on historical data

### API Endpoint

**GET** `http://localhost:5001/predict`

**Response Example:**
```json
{
  "Environmental Impact Levels": {
    "Pollution Level": "45.2/100",
    "Global Warming Impact": "38.7/100"
  },
  "Detailed Analytics Data (ML Processed)": [
    {
      "Date": "2025-09-18",
      "Wet Waste Container Weight (kg)": "120.50",
      "Dry Waste Container Weight (kg)": "45.30",
      "Total Weight (kg)": "165.80",
      "Pollution Level": 45.2,
      "Global Warming Impact": 38.7
    }
  ]
}
```

### Interpreting Results

**Pollution Level:**
- 0-30: ✅ Acceptable Range
- 31-60: ⚠️ Elevated - Monitoring Needed
- 61-100: 🚨 Critical - Action Required

**Global Warming Impact:**
- 0-30: ✅ Low Risk
- 31-50: ⚠️ Medium Risk
- 51-100: 🚨 High Risk - Urgent Action

### Training Data

The models are trained on:
- **45+ historical records** from multiple collection areas
- **6 different areas**: Channasandra, Kengeri, Ramanagara, Ullal, Yesvantpur
- **Multiple data points**: Waste weights, environmental sensors, pollutant levels

---

## 📄 PDF Report Feature

### Feature Overview

The PDF report feature allows users to export comprehensive analytics reports with professional formatting, suitable for presentations and official documentation.

### What's Included

**Page 1: Visual Analytics**
- Report header with title and date range
- 5 summary cards with color coding
- Waste data chart (line visualization)
- Environmental impact chart
- Composition analysis (2 mini charts)

**Page 2: ML Analysis & Recommendations**
- Environmental impact summary box
- Pollution level status with visual indicators
- Global warming impact assessment
- Numbered list of AI-generated recommendations
- Based on actual data analysis

**Page 3+: Detailed Data**
- Complete tabular data
- All dates and measurements
- Formatted for easy reading
- Suitable for archival

**All Pages Include:**
- Page numbers (bottom left)
- Generation timestamp (bottom right)
- Professional formatting

### What's Excluded

The PDF intentionally excludes interactive elements:
- ❌ Filter controls (date pickers)
- ❌ Chart type selectors
- ❌ Data view toggles
- ❌ Download button itself
- ❌ Any UI navigation elements

This ensures the PDF is clean, professional, and print-ready.

### Technical Implementation

**Libraries Used:**
- `jspdf@3.0.3` - PDF document generation
- `jspdf-autotable@5.0.2` - Professional table formatting
- `html2canvas@1.4.1` - Chart rendering to images

**Key Features:**
- **A4 Paper Size**: 210mm × 297mm (standard)
- **Portrait Orientation**: Optimal for reports
- **Smart Pagination**: Automatic page breaks
- **High Resolution**: 1.5x scale for crisp output
- **Optimized File Size**: 200-500KB typical

**Generation Process:**
1. User clicks "Download Report"
2. System waits 800ms for chart rendering
3. Captures hidden PDF-optimized content
4. Generates multi-page PDF
5. Adds headers, footers, page numbers
6. Downloads automatically

### Recent Fix

**Problem Solved:**
The PDF download wasn't working due to incorrect library imports.

**What Was Fixed:**
```typescript
// Before (Incorrect)
import 'jspdf-autotable';
(pdf as any).autoTable({ ... });

// After (Correct)
import autoTable from 'jspdf-autotable';
autoTable(pdf, { ... });
```

This ensures proper TypeScript integration and reliable PDF generation.

---

## 🔍 Troubleshooting

### Common Issues & Solutions

#### 1. Ports Already in Use

**Problem:** Error message: "Port 5173 or 5001 already in use"

**Solution:**
```bash
./stop.sh    # Stop all existing servers
./start.sh   # Restart
```

#### 2. PDF Not Downloading

**Problem:** Clicking "Download Report" does nothing

**Solutions:**
- ✅ **Check Browser Console** (F12) for error messages
- ✅ **Verify Data Exists**: Make sure you've loaded data first
- ✅ **Check Popup Blocker**: Allow downloads from localhost
- ✅ **Clear Cache**: Hard refresh with Ctrl+F5
- ✅ **Try Different Date Range**: Some ranges may have no data

**Expected Console Output:**
```
Starting PDF generation...
Analytics data points: 10
PDF content ref available: true
Waiting for charts to render...
Generated suggestions: 3
Calling pdfService.generateAnalyticsReport...
✓ Analytics PDF generated successfully
```

#### 3. ML API Not Responding

**Problem:** Analytics page shows "Loading..." forever

**Solution:**
```bash
# Check if Flask is running
curl http://localhost:5001/predict

# View Flask logs
tail -f ml_model/flask.log

# Restart Flask
./stop.sh
./start.sh
```

#### 4. Dependencies Not Installing

**Problem:** Errors during `npm install` or `pip install`

**Solution:**
```bash
# Update Node.js and npm
node --version    # Should be 18+
npm --version     # Should be 9+

# Update Python and pip
python3 --version # Should be 3.12+
pip3 --version

# Clean install
rm -rf node_modules package-lock.json
npm install

# For Python
pip install --upgrade pip
pip install -r ml_model/requirements.txt
```

#### 5. Firebase Connection Issues

**Problem:** Data not loading from Firebase

**Solution:**
- Check `src/config/firebase.ts` configuration
- Verify Firebase project credentials
- Check internet connection
- Verify Firebase rules allow read/write

#### 6. Chart Not Rendering

**Problem:** Blank space where chart should be

**Solution:**
- Check browser console for Chart.js errors
- Verify data format is correct
- Try switching chart type (Line/Bar)
- Refresh the page

### Viewing Logs

**Frontend Logs:**
```bash
tail -f vite.log
```

**Backend Logs:**
```bash
tail -f ml_model/flask.log
```

**Real-time Log Monitoring:**
```bash
./start.sh  # Automatically shows both logs
```

### Getting Help

If issues persist:
1. Check the console for specific error messages
2. Verify all prerequisites are installed
3. Try the manual setup process
4. Check GitHub issues for similar problems
5. Review the documentation files in the project

---

## 🔧 Technical Details

### System Requirements

**Minimum:**
- 4GB RAM
- 2GB free disk space
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Firebase

**Recommended:**
- 8GB+ RAM
- 5GB free disk space
- Chrome or Firefox (latest version)
- Stable internet connection

### Browser Compatibility

**Fully Supported:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Limited Support:**
- ⚠️ IE 11 (not recommended)
- ⚠️ Older mobile browsers

### Performance

**PDF Generation:**
- Small datasets (<50 records): <1 second
- Medium datasets (50-100 records): 1-2 seconds
- Large datasets (>100 records): 2-3 seconds

**ML Predictions:**
- Training time: ~10-15 seconds
- Prediction time: <1 second
- Response time: ~15-20 seconds total

**Page Load Times:**
- Initial load: <2 seconds
- Data filtering: <1 second
- Chart rendering: <500ms

### Data Storage

**Firebase Realtime Database:**
- Real-time sync across clients
- Offline persistence enabled
- Automatic retry on connection loss

**Local Storage:**
- Theme preference
- User session
- Analytics cache

### Security

**Authentication:**
- Email/password authentication
- Email verification required
- Secure session management

**Data Protection:**
- Firebase security rules
- HTTPS encryption
- CORS protection on API

**Best Practices:**
- Regular security updates
- Dependency vulnerability scanning
- Input validation
- XSS protection

---

## 👨‍💻 Development

### Development Setup

1. **Clone and Setup:**
```bash
git clone <repository-url>
cd gov.web.portal-waste-management
./start.sh
```

2. **Development Mode:**
```bash
npm run dev          # Frontend with hot reload
cd ml_model && python3 app.py  # Backend
```

### Code Structure

**Frontend:**
- **Components**: Reusable React components
- **Services**: Business logic and API calls
- **Context**: Global state management
- **Types**: TypeScript type definitions

**Backend:**
- **app.py**: Flask API server
- **waste_prediction_model.py**: ML model class

### Available Scripts

**Frontend:**
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build
npm run setup        # Full setup and start
npm run stop         # Stop all servers
```

**Backend:**
```bash
python3 app.py       # Start Flask server
python3 -m pytest    # Run tests (if configured)
```

### Environment Variables

Create `.env` file in root:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_DATABASE_URL=your_database_url
```

### Adding New Features

**Frontend:**
1. Create component in `src/components/`
2. Add types in `src/types/index.ts`
3. Add service if needed in `src/services/`
4. Update routing in `App.tsx`

**Backend:**
1. Add function to `waste_prediction_model.py`
2. Create new endpoint in `app.py`
3. Update API documentation

### Code Style

**TypeScript/React:**
- Use TypeScript strict mode
- Follow React best practices
- Use functional components with hooks
- Props validation with TypeScript interfaces

**Python:**
- Follow PEP 8 style guide
- Use type hints
- Document functions with docstrings
- Keep functions focused and small

### Testing

**Frontend Testing:**
```bash
npm run test         # Run tests
npm run test:watch   # Watch mode
```

**Backend Testing:**
```bash
cd ml_model
python3 -m pytest tests/
```

### Building for Production

**Frontend:**
```bash
npm run build
npm run preview      # Test production build
```

**Backend:**
```bash
# Use production WSGI server
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5001 app:app
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Support

For questions, issues, or contributions:
- **Issues**: Report bugs or request features
- **Documentation**: Check all .md files in the project
- **Logs**: Review vite.log and ml_model/flask.log

---

## 🎉 Acknowledgments

Built with:
- React & TypeScript
- TensorFlow & Keras
- Firebase
- Chart.js
- Tailwind CSS
- And many other amazing open-source libraries

---

**Last Updated**: October 2025

**Version**: 1.0.0

---

## Quick Links

- [Quick Start Guide](QUICKSTART.md)
- [Setup Details](SETUP_COMPLETE.md)
- [PDF Feature Documentation](PDF_ANALYTICS_FEATURE.md)
- [PDF Fix Details](PDF_DOWNLOAD_FIX.md)
- [Testing Guide](TESTING_PDF_DOWNLOAD.md)
- [ML Model Documentation](ml_model/README.md)

---

Made with ❤️ for better waste management