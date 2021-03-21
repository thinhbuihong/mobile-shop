import express from 'express';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
const productRoutes = express.Router();
import Product from '../models/productModel.js';

//@desc   fetch all products
//@route  GET /api/products
//@access public 
productRoutes.get("/", asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products)
}))

//@desc   fetch all product
//@route  GET /api/products/:id
//@access public 
productRoutes.get("/:id", asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error("Product not found");
  }
  const product = await Product.findById(req.params.id);
  res.json(product);
}))
export default productRoutes;