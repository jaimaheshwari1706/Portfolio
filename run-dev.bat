@echo off
echo Starting Jai Maheshwari Portfolio Development Servers...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend\portfolio && ng serve"

echo.
echo Both servers are starting...
echo Frontend: http://localhost:4200
echo Backend: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul