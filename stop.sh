#!/bin/bash

# Government Waste Management Portal - Stop Script
# This script stops both frontend and backend servers

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Stopping Waste Management Portal servers...${NC}"

# Kill processes on port 5173 (Vite)
if lsof -ti:5173 > /dev/null 2>&1; then
    lsof -ti:5173 | xargs kill -9
    echo -e "${GREEN}✓ Frontend server stopped (port 5173)${NC}"
else
    echo -e "${YELLOW}• Frontend server not running${NC}"
fi

# Kill processes on port 5001 (Flask)
if lsof -ti:5001 > /dev/null 2>&1; then
    lsof -ti:5001 | xargs kill -9
    echo -e "${GREEN}✓ Backend server stopped (port 5001)${NC}"
else
    echo -e "${YELLOW}• Backend server not running${NC}"
fi

echo -e "${GREEN}All servers stopped${NC}"
