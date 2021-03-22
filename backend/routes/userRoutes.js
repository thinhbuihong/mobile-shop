import express from 'express';
import { authUser } from '../controllers/userController.js';
const userRoutes = express.Router();

userRoutes.route('/login').post(authUser);

export default userRoutes;