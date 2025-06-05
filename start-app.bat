@echo off
echo Starting QDB Application...

echo Starting Backend Server...
start cmd /k "cd backend && npm run dev:watch"

echo Starting Frontend Server...
start cmd /k "cd frontend && npm run dev"

echo Both services are running!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173 