import livros from "../models/Livro.js";

class livroController {

    static listarLivros = async (req, res, next) => {
        try {
            const livrosResultado = await livros.find()
                .populate("autor")
                .exec();

            res.status(200).json(livrosResultado);
        } catch (erro) {
            next(erro);
        }
    };

    static listarLivrosPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const livroResultado = await livros.findById(id)
                .populate("autor", "nome")
                .exec();

            if (livroResultado !== null) {
                res.status(200).send(livroResultado);
            } else {
                res.status(404).send({ message: "id do Livro não localizado." });
            }
        } catch (erro) {
            next(erro);
        }
    };

    static listarLivrosPorEditora = async (req, res, next) => {
        try {
            const editora = req.query.editora;

            const livrosResultado = await livros.find({ "editora": editora });
            res.status(200).send(livrosResultado);
        } catch (erro) {
            next(erro);
        }
    };

    static cadastrarLivro = async (req, res, next) => {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save();
            res.status(201).send(livroResultado.toJSON());
        } catch (erro) {
            next(erro);
        }
    };

    static atualizarLivro = async (req, res, next) => {
        try {
            const id = req.params.id;

            await livros.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: "Livro atualizado com sucesso!" });
        } catch (erro) {
            next(erro);
        }
    };

    static excluirLivro = async (req, res, next) => {
        try {
            const id = req.params.id;

            await livros.findByIdAndDelete(id);

            res.status(200).send({ message: "Livro removido com sucesso!" });
        } catch (erro) {
            next(erro);
        }
    };

}
export default livroController;