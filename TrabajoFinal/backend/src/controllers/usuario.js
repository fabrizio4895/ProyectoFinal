import usuarioRepository from "../repository/usuario.js";
//Controllers tiene la responsabilidad de lidiar con las respuestas y peticiones que recibe el API

//findAll va a devolver todos los usuarios
const findAll = (req,res) => {   
    const usuarios = usuarioRepository.findAll();
    return res.status(200).json(usuarios);  //status 200 indica que el estado de la respuesta es satisfactorio y va a devolver el arreglo usuarios
}

const create = (req,res) => {
    const result = usuarioRepository.create(req.body); //req.body es el usuario que se implementará
    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id; //Se obtiene el id de la url
    const result = usuarioRepository.findOne(id);

    if(result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message: 'No se encontró al usuario'})
}   

const update = (req,res) => {
    const result = usuarioRepository.update(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Usuario no encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = usuarioRepository.remove(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Usuario no encontrado.'})
}

const usuarioController = {findAll, create, findOne, update, remove}

export default usuarioController;