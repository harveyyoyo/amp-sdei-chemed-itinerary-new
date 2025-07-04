@echo off
echo ========================================
echo   Getting Public URL (No Password)
echo ========================================
echo.
echo Option 1: Use your Bluehost domain
echo - Go to: https://campsdeichemed.com/cpanel
echo - Upload dist folder contents to public_html
echo - People visit: https://campsdeichemed.com
echo.
echo Option 2: Try ngrok (no password)
echo - Opening ngrok in new window...
echo.
start ngrok http 8080
echo.
echo Option 3: Local network access
echo - Share: http://192.168.1.208:8080
echo - Works for anyone on your WiFi
echo.
echo Option 4: Deploy to free hosting
echo - Go to: https://netlify.com
echo - Drag & drop dist folder
echo - Get instant public URL
echo.
pause 