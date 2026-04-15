import express from 'express';
import { adminOnly, verifytoken } from '../utils/verifyUser.js';
import { createTask, deleteTask, getTaskById, getTasks, updateTask, updateTaskStatus } from '../controller/task.controller.js';

const router = express.Router();

router.post("/createTask", verifytoken, adminOnly, createTask);

router.get("/", verifytoken, getTasks);

router.get("/:id", verifytoken, getTaskById);

router.put("/:id", verifytoken, updateTask);

router.delete("/:id", verifytoken, adminOnly, deleteTask);

router.put("/:id/status", verifytoken, updateTaskStatus);

export default router; 