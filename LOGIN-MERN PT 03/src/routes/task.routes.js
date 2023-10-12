import { Router } from "express";
import { getTask, getTasks, createTask, deleteTask, updateTask } from "../controllers/task.controller";
import { requiredAuth } from '../middlewares/tokenValidation.js';

const router = Router();

router.get('/tasks', requiredAuth,  getTasks)
router.get('/task/:id', requiredAuth,  getTask)
router.post('/task', requiredAuth,  createTask)
router.put('/task/:id', requiredAuth,  updateTask)
router.delete('/task/:id', requiredAuth, deleteTask)

export default router;