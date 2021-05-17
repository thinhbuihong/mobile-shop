import express from 'express';
import { deleteProduct, getProductById, getProducts } from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleWare.js';

const productRoutes = express.Router();

productRoutes.route('/').get(getProducts);
productRoutes.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default productRoutes;