import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import mongoose from 'mongoose';

//@desc   fetch all products
//@route  GET /api/products
//@access public 
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
})

//@desc   fetch all product
//@route  GET /api/products/:id
//@access public 
export const getProductById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error("Product not found");
  }
  const product = await Product.findById(req.params.id);
  res.json(product);
})