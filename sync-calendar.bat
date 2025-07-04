@echo off
echo 🔄 Syncing calendar data...
node fetch-calendar-data.js
echo.
echo ✅ Sync complete! Please refresh your browser.
pause 