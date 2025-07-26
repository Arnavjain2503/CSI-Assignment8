import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import productRoutes from './routes/product.routes.js';
import authRoutes from './auth/auth.routes.js';
import errorHandler from './middleware/errorHandler.js'; 

import weatherRoutes from './routes/weather.routes.js';  

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Public routes for authentication
app.use('/api/auth', authRoutes);

// Protected routes for products
app.use('/api/products', productRoutes);

// Weather route for getting weather data
app.use('/api', weatherRoutes);

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
