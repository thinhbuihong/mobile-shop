import express from 'express';
import { authUser, getUserProfile, getUsers, registerUser, updateUserProfile } from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleWare.js';
const userRoutes = express.Router();

//split authen for admin and nomal users
userRoutes.route('/').post(registerUser).get(protect, admin, getUsers);
userRoutes.route('/login').post(authUser);
userRoutes.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default userRoutes;