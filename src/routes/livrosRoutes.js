import express from "express";
import livroControler from "../controller/livrosControler.js";

const router = express.Router();

router
    .get("/livros", livroControler.listarLivros)
    .get("/livros/busca/", livroControler.listarLivrosPorEditora)
    .get("/livros/:id", livroControler.listarLivrosPorId)
    .post("/livros", livroControler.cadastrarLivro)
    .put("/livros/:id", livroControler.atualizarLivro)
    .delete("/livros/:id", livroControler.excluirLivro)

export default router;