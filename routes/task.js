import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  addTask,
  deleteTask,
  getmytask,
  updatetask,
} from "../controllers/task.js";

const router = express.Router();

router.post("/addtask", isAuthenticated, addTask);
router.get("/getmytask", isAuthenticated, getmytask);
router
  .route("/:id")
  .put(isAuthenticated, updatetask)
  .delete(isAuthenticated, deleteTask);

export default router;
