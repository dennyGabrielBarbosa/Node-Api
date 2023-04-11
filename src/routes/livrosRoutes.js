import express from "express";
import livroControler from "../controller/livrosControler.js";

const router = express.Router();

router 
    .get("/livros", livroControler.listarLivros);

export default router;