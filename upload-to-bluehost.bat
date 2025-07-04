@echo off
echo ========================================
echo   Bluehost Upload Helper
echo ========================================
echo.
echo Your site is ready for upload!
echo.
echo Files to upload (from dist folder):
echo - index.html
echo - favicon.ico
echo - robots.txt
echo - placeholder.svg
echo - .htaccess (IMPORTANT!)
echo - assets/ folder (with CSS and JS files)
echo.
echo Upload Methods:
echo 1. Bluehost cPanel File Manager (easiest)
echo 2. FTP client (FileZilla, WinSCP, etc.)
echo 3. Command line (if you have SSH access)
echo.
echo Instructions:
echo 1. Log into your Bluehost cPanel
echo 2. Go to File Manager
echo 3. Navigate to public_html folder
echo 4. Upload all contents from the dist folder
echo 5. Make sure .htaccess file is uploaded
echo.
echo After upload, visit your domain to test!
echo.
pause 