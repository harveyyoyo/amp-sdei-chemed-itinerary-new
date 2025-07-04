# Bluehost Upload Instructions

## Files to Upload (from the `dist` folder):

### Root Files:
- `index.html` (1.0KB)
- `favicon.ico` (7.5KB)
- `robots.txt` (174B)
- `placeholder.svg` (3.2KB)
- `.htaccess` (1.1KB) - **Important for React Router!**

### Assets Folder:
- `assets/index-DxVVrc3i.css` (79KB)
- `assets/index-wbzW99XQ.js` (348KB)

## Upload Methods:

### Method 1: Bluehost cPanel File Manager
1. Log into your Bluehost cPanel
2. Click "File Manager"
3. Navigate to `public_html` folder
4. Upload all files from the `dist` folder
5. Make sure to upload the `.htaccess` file (it might be hidden)

### Method 2: FTP Upload
If you prefer FTP, here are the credentials you'll need:
- Host: Your domain or Bluehost FTP server
- Username: Your Bluehost username
- Password: Your Bluehost password
- Port: 21 (default)

### Method 3: Command Line (if you have SSH access)
```bash
# Navigate to your dist folder
cd dist

# Upload all files to public_html
scp -r * your-username@your-domain.com:public_html/
```

## Important Notes:

1. **Upload to `public_html`** - This is your main website directory
2. **Keep the folder structure** - The `assets` folder must remain as a subfolder
3. **Don't forget `.htaccess`** - This file enables React Router to work properly
4. **File permissions** - Set files to 644 and folders to 755

## After Upload:

1. Visit your domain to test the site
2. Test navigation to ensure React Router works
3. Check that all assets load properly

## Troubleshooting:

- If you get a 404 error, make sure `.htaccess` was uploaded
- If assets don't load, check that the `assets` folder structure is correct
- If routing doesn't work, verify the `.htaccess` file is in the root directory

## Your Site URL:
Once uploaded, your site will be available at:
- `https://yourdomain.com` (if uploaded to public_html)
- `https://subdomain.yourdomain.com` (if uploaded to a subdomain folder) 