import fs from 'fs/promises';
import express from 'express';

const app = express();
app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.get('/api/places', async (req, res) => {
  try {
    const fileContent = await fs.readFile('./data/places.json');
    const places = JSON.parse(fileContent);
    res.json({ places });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch places" });
  }
});

// Export for Vercel
export default app;