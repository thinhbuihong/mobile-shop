import express from 'express';
import { addOrder } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';
const orderRoutes = express.Router();

orderRoutes.route('/').post(protect, addOrder);

export default orderRoutes;

