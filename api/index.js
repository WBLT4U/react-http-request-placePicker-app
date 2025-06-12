import fs from 'fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/places', async (req, res) => {
  try {
    const fileContent = await fs.readFile('./data/places.json');
    const places = JSON.parse(fileContent);
    res.json({ places });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch places" });
  }
});

export default app;