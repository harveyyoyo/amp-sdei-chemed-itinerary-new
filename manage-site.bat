@echo off
echo S'dei Chemed Itinerary Site Manager
echo ===================================
echo.
echo Choose an option:
echo 1. Start the site
echo 2. Stop the site
echo 3. Restart the site
echo 4. Check status
echo 5. View logs
echo 6. Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" (
    echo Starting the site...
    pm2 resurrect
    echo Site started!
    pause
    goto :eof
)

if "%choice%"=="2" (
    echo Stopping the site...
    pm2 stop 0
    echo Site stopped!
    pause
    goto :eof
)

if "%choice%"=="3" (
    echo Restarting the site...
    pm2 restart 0
    echo Site restarted!
    pause
    goto :eof
)

if "%choice%"=="4" (
    echo Current status:
    pm2 status
    pause
    goto :eof
)

if "%choice%"=="5" (
    echo Recent logs:
    pm2 logs --lines 20
    pause
    goto :eof
)

if "%choice%"=="6" (
    echo Goodbye!
    goto :eof
)

echo Invalid choice. Please try again.
pause 