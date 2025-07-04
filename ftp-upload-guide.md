# FTP Upload Guide for Bluehost

## FTP Credentials:
- **Host:** campsdeichemed.com
- **Username:** campsdeichemed.com
- **Password:** [Your password]
- **Port:** 21

## Step-by-Step FTP Upload:

### Using FileZilla (Free FTP Client):
1. Download FileZilla from https://filezilla-project.org/
2. Open FileZilla
3. Enter your credentials:
   - Host: campsdeichemed.com
   - Username: campsdeichemed.com
   - Password: [Your password]
   - Port: 21
4. Click "Quickconnect"
5. Navigate to `public_html` folder on the right side (server)
6. Navigate to your `dist` folder on the left side (local)
7. Select all files and folders from `dist`
8. Drag them to `public_html` on the server side

### Files to Upload:
- index.html
- favicon.ico
- robots.txt
- placeholder.svg
- .htaccess (IMPORTANT!)
- assets/ folder (with all contents)

## Security Reminder:
- Change your password after upload
- Use SFTP if available (port 22)
- Keep credentials secure

## After Upload:
Visit https://campsdeichemed.com to test your site! 