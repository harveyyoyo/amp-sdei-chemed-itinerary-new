# Hosting Website from Your Computer as Server

## Option 1: Port Forwarding (Recommended)

### Step 1: Find Your IP Address
```bash
# Get your local IP
ipconfig
# Look for "IPv4 Address" (usually 192.168.x.x)

# Get your public IP
curl ifconfig.me
# or visit whatismyipaddress.com
```

### Step 2: Configure Router Port Forwarding
1. **Access your router** (usually 192.168.1.1 or 192.168.0.1)
2. **Login** with router credentials
3. **Find Port Forwarding** section
4. **Add rule:**
   - External Port: 80 (HTTP) or 443 (HTTPS)
   - Internal Port: 8080 (your app port)
   - Internal IP: Your computer's IP (192.168.x.x)
   - Protocol: TCP

### Step 3: Run Your Server
```bash
# Your app is already running on port 8080
# People can access: http://YOUR_PUBLIC_IP:80
```

## Option 2: ngrok (Easiest - No Router Config)

### Install ngrok
```bash
# Download from https://ngrok.com
# Or use npm
npm install -g ngrok
```

### Create Tunnel
```bash
# Create tunnel to your local server
ngrok http 8080

# This gives you a public URL like:
# https://abc123.ngrok.io
```

## Option 3: Cloudflare Tunnel (Free & Secure)

### Install cloudflared
```bash
# Download from https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
```

### Create Tunnel
```bash
# Login to Cloudflare
cloudflared tunnel login

# Create tunnel
cloudflared tunnel create my-website

# Run tunnel
cloudflared tunnel --url http://localhost:8080
```

## Option 4: Local Network Only
If you just want to share on your local network:
- Your app is already accessible at: http://192.168.1.208:8080
- Anyone on your WiFi can access it

## Security Considerations:
- **Firewall**: Allow port 8080 through Windows Firewall
- **Router Security**: Use strong router passwords
- **HTTPS**: Consider SSL certificate for security
- **Updates**: Keep your computer updated

## Quick Start (ngrok method):
```bash
# Install ngrok
npm install -g ngrok

# Create tunnel to your running app
ngrok http 8080

# Share the ngrok URL with others
``` 