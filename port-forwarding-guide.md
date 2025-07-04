# Port Forwarding Guide - Host from Your Computer

## Step 1: Find Your Router IP
1. **Open Command Prompt**
2. **Type:** `ipconfig`
3. **Look for "Default Gateway"** (usually 192.168.1.1 or 192.168.0.1)

## Step 2: Access Your Router
1. **Open web browser**
2. **Go to your router IP** (e.g., http://192.168.1.1)
3. **Login** with router credentials (check router label)

## Step 3: Find Port Forwarding
- Look for "Port Forwarding" or "Virtual Server"
- Usually under "Advanced Settings" or "Security"

## Step 4: Add Port Forward Rule
**External Port:** 80 (HTTP) or 443 (HTTPS)
**Internal Port:** 8080 (your app port)
**Internal IP:** 192.168.1.208 (your computer)
**Protocol:** TCP

## Step 5: Get Your Public IP
1. **Go to:** whatismyipaddress.com
2. **Copy your public IP**

## Step 6: Test
People can now access: http://YOUR_PUBLIC_IP:80

## Alternative: Use Port 8080
If port 80 doesn't work:
- **External Port:** 8080
- **Internal Port:** 8080
- People access: http://YOUR_PUBLIC_IP:8080

## Security Notes:
- Keep router password secure
- Consider using HTTPS
- Monitor for unusual traffic 