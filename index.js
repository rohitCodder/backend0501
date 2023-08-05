import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectdb } from "./database/database.js";
import { errorMiddlewares } from "./middlewares/error.js";
import cors from "cors";
dotenv.config({
  path: "./database/config.env",
});
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
const app = express();
connectdb();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// using routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(errorMiddlewares);
