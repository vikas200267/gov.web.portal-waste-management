# Quick Start Guide

## 🚀 One-Command Setup and Start

Run the entire application (frontend + backend + ML API) with a single command:

```bash
./start.sh
```

Or using npm:
```bash
npm run setup
```

### What it does:
1. ✅ Installs all frontend dependencies (npm packages)
2. ✅ Installs all Python/ML backend dependencies
3. ✅ Starts Flask ML API on port 5001
4. ✅ Starts Vite React frontend on port 5173
5. ✅ Shows logs from both servers

### Access the application:
- **Frontend**: http://localhost:5173
- **Backend ML API**: http://localhost:5001/predict

---

## 🛑 Stop All Servers

```bash
./stop.sh
```

Or using npm:
```bash
npm run stop
```

---

## 📝 View Logs

After starting with `./start.sh`, logs are automatically displayed. If you need to view them separately:

```bash
# Frontend logs
tail -f vite.log

# Backend logs
tail -f ml_model/flask.log
```

---

## 🔧 Manual Setup (Alternative)

If you prefer to run commands manually:

### Frontend:
```bash
npm install
npm run dev
```

### Backend:
```bash
cd ml_model
python3 -m pip install --break-system-packages -r requirements.txt
python3 app.py
```

---

## 📋 Requirements

- Node.js (v18+)
- Python 3.12+
- npm
- pip

---

## 🎯 Features

- **Real-time Analytics**: ML-powered pollution and global warming predictions
- **Dashboard**: Waste management data visualization
- **Firebase Integration**: Real-time database for waste data
- **Date Range Filtering**: Filter analytics by custom date ranges
- **Export Reports**: Download analytics data as CSV

---

## 🐛 Troubleshooting

### Port already in use?
Run the stop script first:
```bash
./stop.sh
```

### Dependencies not installing?
Make sure you have the required Python and Node.js versions:
```bash
python3 --version  # Should be 3.12+
node --version     # Should be 18+
```

### Flask server not starting?
Check the logs:
```bash
cat ml_model/flask.log
```
