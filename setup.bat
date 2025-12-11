@echo off
echo Setting up Jai Maheshwari Portfolio...
echo.

echo Installing Frontend Dependencies...
cd frontend\portfolio
call npm install
echo.

echo Installing Backend Dependencies...
cd ..\..\backend
call npm install
echo.

echo Setup Complete!
echo.
echo To run the application:
echo 1. Start Backend: cd backend && npm start
echo 2. Start Frontend: cd frontend\portfolio && ng serve
echo.
echo Frontend will be available at: http://localhost:4200
echo Backend API will be available at: http://localhost:3000
echo.
echo Don't forget to configure your email in backend\.env file!
pause