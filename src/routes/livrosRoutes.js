import express from "express";
import livroControler from "../controller/livrosControler.js";

const router = express.Router();

router
    .get("/livros", livroControler.listarLivros)
    .get("/livros/:id", livroControler.listarLivrosPorId)
    .post("/livros", livroControler.cadastrarLivro)
    .put("/livros/:id", livroControler.atualizarLivro);

export default router;