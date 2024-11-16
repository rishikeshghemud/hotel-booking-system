import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/models/connectDB';
dotenv.config();

import hotelsRoute from './src/routes/hotelsRoute'

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
connectDB();

app.use('/api/hotels', hotelsRoute);


app.listen(PORT, () => console.log(`Server running on ${PORT}`));

export default app;
