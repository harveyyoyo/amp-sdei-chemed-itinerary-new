import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors({
  origin: [
    'http://localhost:8080', 
    'http://localhost:8081', 
    'http://127.0.0.1:8080', 
    'http://127.0.0.1:8081',
    'http://192.168.1.208:8080',
    'http://192.168.1.208:8081',
    'http://70.18.54.222:8080',
    'http://70.18.54.222:8081'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static('dist'));

// Sync endpoint
app.post('/api/sync-calendar', (req, res) => {
  console.log('🔄 Sync request received');
  
  exec('node fetch-calendar-data.js', { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Sync error:', error);
      return res.status(500).json({ error: 'Sync failed', details: error.message });
    }
    
    if (stderr) {
      console.error('⚠️ Sync warning:', stderr);
    }
    
    console.log('✅ Sync output:', stdout);
    
    // After successful sync, run the description generation script
    console.log('🔄 Running description generation...');
    exec('node auto-add-missing-descriptions.cjs', { cwd: __dirname }, (descError, descStdout, descStderr) => {
      if (descError) {
        console.error('❌ Description generation error:', descError);
        // Don't fail the sync, just log the error
      } else {
        console.log('✅ Description generation output:', descStdout);
        if (descStderr) {
          console.error('⚠️ Description generation warning:', descStderr);
        }
      }
      
      res.json({ success: true, message: 'Calendar synced successfully and descriptions updated. All users will now see the updated data.' });
    });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Sync server running on http://0.0.0.0:${PORT}`);
  console.log(`📝 Local access: http://localhost:${PORT}`);
  console.log(`🌐 Network access: http://70.18.54.222:${PORT}`);
  console.log('📝 Use this URL in your app for sync requests');
}); 