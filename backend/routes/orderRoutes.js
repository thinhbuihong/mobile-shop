import express from 'express';
import { addOrder, getOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';
const orderRoutes = express.Router();

orderRoutes.route('/').post(protect, addOrder).get(protect, getOrders);

export default orderRoutes;

