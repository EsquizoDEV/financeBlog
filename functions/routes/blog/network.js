import express from "express";

const router = express.Router()

router.get('/blogs',(req, res) => {
    console.log("Getting request on blogs")
    
    return
})

export default router