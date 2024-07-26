import express from "express";
// import connection from "../config/connection.js"

import userControllers from "../controller/userControllers.js"
const router = express.Router();
//insert data in database
const obj =new userControllers();
router.post("/add",obj.addUser);


//get data from database along with id

router.get("/:id",obj.searchUser);

//update user

router.put("/update/:id",obj.updateUser);

//delete user
router.get("/delete/:id",obj.deleteUser);
export default router;




