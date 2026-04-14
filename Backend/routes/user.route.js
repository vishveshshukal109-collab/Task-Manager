import express from 'express';
import { adminOnly, verifytoken } from '../utils/verifyUser.js';
import { getUsers } from '../controller/user.controller.js';

const router = express.Router();

// User management routes
router.get("/getusers", verifytoken, adminOnly, getUsers);

export default router;