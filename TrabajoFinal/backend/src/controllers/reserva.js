import reservaRepository from "../repository/reserva.js";

const findAll = (req,res) => {   
    const reservas = reservaRepository.findAll();
    return res.status(200).json(reservas);  
}

const create = (req,res) => {
    const result = reservaRepository.create(req.body); //req.body es el usuario que se implementará
    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id; //Se obtiene el id de la url
    const result = reservaRepository.findOne(id);

    if(result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message: 'No se encontró la reserva'})
}   

const update = (req,res) => {
    const result = reservaRepository.update(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Reserva no encontrada.'})
}

const remove = (req,res) => {
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = reservaRepository.remove(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Reserva no encontrada.'})
}

const reservaController = {findAll, create, findOne, update, remove}

export default reservaController;