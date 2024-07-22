import express from "express";
import { json } from "stream/consumers";
import userRouter from "./routes/userRoutes.js";
const app = express();
app.use(express.json());
app.use("/user", userRouter);

app.listen(8000,()=>{
console.log("Server has started");

});