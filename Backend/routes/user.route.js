import express from 'express';
import { adminOnly, verifytoken } from '../utils/verifyUser.js';
import { getUserById, getUsers } from '../controller/user.controller.js';

const router = express.Router();

// User management routes
router.get("/getusers", verifytoken, adminOnly, getUsers);

router.get("/:id", verifytoken,  getUserById);

export default router;