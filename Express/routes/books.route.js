import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("books list");
});

router.get("/add:id", (req, res) => {
    console.log(req.params);
    res.status(200).send("Books added");
});

export default router;
