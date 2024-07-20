import express from "express";
import booksRouter from "./routes/books.route.js";
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use((req,res,next)=>{
    console.log("hello");
    next();
})
app.get("/",(req,res)=>{
    res.status(200).send("page");

});
app.use("/books",booksRouter);
app.listen(8002,()=>{
    console.log("server is running")
});
