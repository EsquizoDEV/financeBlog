import express from "express";
import connection from "../../dbConnection.js";
import {controller} from "./controller.js";

const router = express.Router()

router.get('/',(req, res) => {
    console.log("Getting request on blogs")

    controller(req, res, 'getAllentries', connection)
    .then((result) => {
        console.log(result)
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send("Error en controlador")
    })
    
    return
})

export default router