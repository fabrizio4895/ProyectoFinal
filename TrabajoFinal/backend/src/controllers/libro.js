import libroRepository from "../repository/libro.js";

const findAll = (req,res) => {   
    const libros = libroRepository.findAll();
    return res.status(200).json(libros);  
}

const create = (req,res) => {
    const result = libroRepository.create(req.body); //req.body es el libro que se implementará
    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id; //Se obtiene el id de la url
    const result = libroRepository.findOne(id);

    if(result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message: 'No se encontró el libro'})
}   

const update = (req,res) => {
    const result = libroRepository.update(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Libro no encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = libroRepository.remove(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Libro no encontrado.'})
}

const libroController = {findAll, create, findOne, update, remove}

export default libroController;