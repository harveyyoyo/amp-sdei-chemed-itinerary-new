# PowerShell script to create Windows Task Scheduler task for S'dei Chemed startup
# Run this script as Administrator

$taskName = "SdeiChemedItineraryStartup"
$taskDescription = "Automatically starts the S'dei Chemed Itinerary website on system startup"
$scriptPath = "C:\Users\Administrator\Camp-Sdei-Chemed-Itinerary-New\startup-sdei-chemed.bat"

# Create the task action
$action = New-ScheduledTaskAction -Execute $scriptPath

# Create the trigger (at startup)
$trigger = New-ScheduledTaskTrigger -AtStartup

# Create the task settings
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

# Create the task principal (run as current user)
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest

# Register the task
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Description $taskDescription

Write-Host "Windows startup task created successfully!"
Write-Host "Task name: $taskName"
Write-Host "The site will now start automatically when Windows boots up."
Write-Host ""
Write-Host "To manage the task:"
Write-Host "1. Open Task Scheduler (taskschd.msc)"
Write-Host "2. Look for task: $taskName"
Write-Host "3. You can enable/disable or modify it there" 