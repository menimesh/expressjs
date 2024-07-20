import express from "express";
const router = express.Router();

router.use((req,res,next)=>{
   const token = req.headers.token;
   if(token && token =="abc"){
    console.log("validate");
    next();
   }
   else{
    res.status(403).send("Invalid token")
   }
});
router.get("/", (req, res) => {
    res.status(200).send("books list");
});



router.post("/add", (req, res) => {
  console.log(req.body);
    res.status(200).send("Books added");
});
router.delete("/delete",(req,res) =>{
res.status(200).send("Delete sucessfully");
});

export default router;
