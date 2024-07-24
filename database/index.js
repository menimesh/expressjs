import express from "express";
import userRouter from "./routes/userRoutes.js";
import connection from "./models/index.js";
const app = express();
app.use(express.json());
app.use("/user", userRouter);

app.listen(8000,async()=>{
console.log("Server has started on port 8000");
try {
    await connection.authenticate();
    connection.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
