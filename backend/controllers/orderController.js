import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc   create new order
//@route  POST /api/orders
//@access private
export const addOrder = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice,
    totalPrice, } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  const order = new Order({
    orderItems,
    userId: req.user._id,
    shippingPrice,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
  })

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
})

//@desk   get order by user id
//@route  Get /api/orders/
//@access private
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });

  res.json(orders);
});