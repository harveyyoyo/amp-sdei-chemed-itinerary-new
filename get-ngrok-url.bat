@echo off
echo ========================================
echo   Getting ngrok Public URL
echo ========================================
echo.
echo ngrok is running! To get your public URL:
echo.
echo 1. Open your web browser
echo 2. Go to: http://localhost:4040
echo 3. You'll see your public URL there
echo.
echo OR manually run ngrok in a new window:
echo - Open a new Command Prompt
echo - Type: ngrok http 8080
echo - Copy the URL that appears
echo.
echo Current accessible URLs:
echo - Local: http://localhost:8080
echo - Network: http://192.168.1.208:8080
echo.
echo Press any key to open ngrok web interface...
pause
start http://localhost:4040 