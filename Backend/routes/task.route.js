import express from 'express';
import { adminOnly, verifytoken } from '../utils/verifyUser.js';
import { createTask } from '../controller/task.controller.js';

const router = express.Router();

router.post("/createTask", verifytoken, adminOnly, createTask);

export default router; 