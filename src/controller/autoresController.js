import autores from "../models/Autor.js";

class AutorControler {

    static listarAutores = async (req, res) => {
        try {
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado);
        } catch (error) {
            res.status(500).json({ message : "Erro internop no sevidor"});
        }
    };

    static listarAutorPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const autorResultado = await autores.findById(id);
            res.status(200).send(autorResultado);
        } catch (error) {
            res.status(400).send({ message: `${error.message} - id do Autor não localizado` });
        }
    };

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastar Autor` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor atualizado com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Autor excluido com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

}
export default AutorControler;