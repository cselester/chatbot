import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import chatHandler from './api/chat.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', chatHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});