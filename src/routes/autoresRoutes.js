import express from "express";
import AutorControler from "../controller/autoresController.js";
import paginar from "../middleware/paginar.js";

const router = express.Router();

router
    .get("/autores", AutorControler.listarAutores, paginar)
    .get("/autores/:id", AutorControler.listarAutorPorId)
    .post("/autores", AutorControler.cadastrarAutor)
    .put("/autores/:id", AutorControler.atualizarAutor)
    .delete("/autores/:id", AutorControler.excluirAutor);

export default router;