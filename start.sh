#!/bin/bash

# Government Waste Management Portal - Full Setup and Start Script
# This script installs all dependencies and starts both frontend and backend servers

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Waste Management Portal - Full Setup${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""

# Check if running from project root
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: Please run this script from the project root directory${NC}"
    exit 1
fi

# Step 1: Install Frontend Dependencies
echo -e "${YELLOW}[1/4] Installing Frontend Dependencies...${NC}"
if [ -f "package.json" ]; then
    npm install
    echo -e "${GREEN}✓ Frontend dependencies installed${NC}"
else
    echo -e "${RED}✗ package.json not found${NC}"
    exit 1
fi
echo ""

# Step 2: Install Python/ML Backend Dependencies
echo -e "${YELLOW}[2/4] Installing Python ML Backend Dependencies...${NC}"
if [ -f "ml_model/requirements.txt" ]; then
    cd ml_model
    /usr/bin/python3 -m pip install --break-system-packages -r requirements.txt
    cd ..
    echo -e "${GREEN}✓ Python dependencies installed${NC}"
else
    echo -e "${RED}✗ ml_model/requirements.txt not found${NC}"
    exit 1
fi
echo ""

# Step 3: Check if data.csv exists
echo -e "${YELLOW}[3/4] Checking for data.csv...${NC}"
if [ -f "data.csv" ]; then
    echo -e "${GREEN}✓ data.csv found${NC}"
else
    echo -e "${YELLOW}⚠ data.csv not found - ML predictions will use Firebase data${NC}"
fi
echo ""

# Step 4: Start Both Servers
echo -e "${YELLOW}[4/4] Starting Servers...${NC}"

# Kill any existing processes on ports 5173 and 5001
echo "Cleaning up existing processes..."
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
lsof -ti:5001 | xargs kill -9 2>/dev/null || true
sleep 2

# Start ML Backend (Flask) in background
echo -e "${BLUE}Starting Flask ML API on port 5001...${NC}"
cd ml_model
nohup /usr/bin/python3 app.py > flask.log 2>&1 &
FLASK_PID=$!
cd ..
echo -e "${GREEN}✓ Flask server started (PID: $FLASK_PID)${NC}"

# Wait for Flask to initialize
echo "Waiting for Flask server to initialize..."
sleep 15

# Check if Flask is running
if ps -p $FLASK_PID > /dev/null; then
    echo -e "${GREEN}✓ Flask server is running${NC}"
else
    echo -e "${RED}✗ Flask server failed to start. Check ml_model/flask.log${NC}"
fi

# Start Frontend (Vite) in background
echo -e "${BLUE}Starting Vite frontend on port 5173...${NC}"
nohup npm run dev > vite.log 2>&1 &
VITE_PID=$!
echo -e "${GREEN}✓ Vite server started (PID: $VITE_PID)${NC}"

# Wait for Vite to initialize
echo "Waiting for Vite server to initialize..."
sleep 5

echo ""
echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}  ✓ Setup Complete!${NC}"
echo -e "${GREEN}============================================${NC}"
echo ""
echo -e "${BLUE}Frontend:${NC} http://localhost:5173"
echo -e "${BLUE}Backend ML API:${NC} http://localhost:5001/predict"
echo ""
echo -e "${YELLOW}Logs:${NC}"
echo "  - Frontend: vite.log"
echo "  - Backend: ml_model/flask.log"
echo ""
echo -e "${YELLOW}To view logs:${NC}"
echo "  - Frontend: tail -f vite.log"
echo "  - Backend: tail -f ml_model/flask.log"
echo ""
echo -e "${YELLOW}To stop servers:${NC}"
echo "  kill $FLASK_PID $VITE_PID"
echo "  or run: ./stop.sh"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop watching logs, servers will continue running${NC}"
echo ""

# Follow logs
tail -f vite.log ml_model/flask.log
