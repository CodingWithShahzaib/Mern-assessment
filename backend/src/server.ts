import express from 'express';
import cors from 'cors';
import routes from './routes';
import { loggerMiddleware, errorHandlerMiddleware } from './services/middlewareService';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/', routes);

// Error handling middleware
app.use(errorHandlerMiddleware);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server; 