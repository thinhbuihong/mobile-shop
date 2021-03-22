import express from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleWare.js';
const userRoutes = express.Router();

userRoutes.route('/').post(registerUser);
userRoutes.route('/login').post(authUser);
userRoutes.route('/profile').get(protect, getUserProfile);

export default userRoutes;