@echo off
echo ========================================
echo   ngrok Setup Guide
echo ========================================
echo.
echo Step 1: Sign up for free ngrok account
echo - Go to: https://dashboard.ngrok.com/signup
echo - Create free account (no credit card needed)
echo.
echo Step 2: Get your authtoken
echo - Login to dashboard
echo - Copy your authtoken
echo.
echo Step 3: Install authtoken
echo - Run: ngrok config add-authtoken YOUR_TOKEN_HERE
echo.
echo Step 4: Start tunnel
echo - Run: ngrok http 8080
echo.
echo Current accessible URLs:
echo - Local: http://localhost:8080
echo - Network: http://192.168.1.208:8080
echo.
pause 