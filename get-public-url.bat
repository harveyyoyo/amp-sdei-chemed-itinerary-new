@echo off
echo ========================================
echo   Getting Public URL for Your Website
echo ========================================
echo.
echo Current Local URLs:
echo - http://localhost:8080 (React App)
echo - http://192.168.1.208:8080 (Local Network)
echo.
echo Starting ngrok tunnel...
ngrok http 8080
echo.
echo Once ngrok starts, you'll see a URL like:
echo https://abc123.ngrok.io
echo.
echo Copy that URL and share it with others!
pause 