import express from "express";
import livroController from "../controller/livrosController.js";
import paginar from "../middleware/paginar.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros, paginar)
    .get("/livros/busca/", livroController.listarLivrosPorFiltro, paginar)
    .get("/livros/:id", livroController.listarLivroPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.excluirLivro);

export default router;