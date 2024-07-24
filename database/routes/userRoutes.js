import express from "express";
import connection from "../models/index.js"
const router = express.Router();
//insert data in database
router.post("/add",(req,res)=>{

console.log(req.query);
const username = req.body.username;
const location = req.body.location;
connection.query(`INSERT INTO users(username,location) VALUES(?,?)`,
    [username,location],
    (err,result,fields) =>{
        if(err) throw err;
        console.log(result);

    if(result.affectedRows ===1){
        res.status(200).json({sucess : true, message: "user add to DB"});
    }
    else{
        res.status(202).json({sucess : false, message: "failed to add data "});
    }
    }
);
});

//get data from database along with id

router.get("/:id",(req,res)=>{
const {id} = req.params;
console.log(id)
if(id){
connection.query(`Select * from users where id=?`,[id],(err,result,fields)=>{
    console.log(result);
    res.status(200).json(...result);
});
}
else{
    res.status(202).json({sucess:false,message: "id not found"});
}
});

//update user

router.put("/update/:id",(req,res)=>{
const {id} = req.params;
const {username,location} = req.body;

if(id){
    connection.query(`UPDATE users set username=?, location=? where id=?`,[username,location,id],(err,result,fields)=>{
        console.log(result);
        if(result.affectedRows===1){
            res.status(200).json({sucess:true,message:"updatesucessfully"});
        }
        else{
            res.status(202).json({sucess:false,message:"failed to update database"});
        }
    });
}
else{
    res.status(202).json({sucess: false,message:"user id not provided"});
}
});

//delete user
router.get("/delete/:id",(req,res)=>{
    const {id} =req.params;
    const {username,location} =req.body;
    if(id){
        connection.query(`DELETE FROM users where id=?`,[id],(err,result,fields)=>{
            console.log(result);
            if(result.affectedRows===1){
                res.status(202).json({sucess:true,message:"sucessfully delted"});
            }
            else{
                res.status(200).json({sucess:false,message:"not deleted"});
            }
        })
    }
    else{
        res.status(202).json({sucess:false,message:"user id not provided"});
    }
});
export default router;




