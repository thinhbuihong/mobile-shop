import dotenv from 'dotenv';
import express from 'express';
import connectDB from "./config/db.js";
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

//middleware handle not found route
app.use(notFound)

//middleware handle error
app.use(errorHandler)

app.listen(
  PORT,
  console.log(`server is runing in ${process.env.NODE_ENV} mode on ${PORT} `)
)
