let reservas = [
{
    id:1,
    fechaReserva:"09-11-23",
    usuario:{id:1},
    libros:[{
        id:1
    },{
        id:2
    }]
}]

const findAll = () => {
    return reservas;
}

const create = (reserva) => {
    reservas.push(reserva)
    return reserva;
}

const findOne = (id) => {
    const result = reservas.find(x => x.id == id);
    return result;
}

const update = (reserva) => {
    //findIndex devuelve el indice de donde se encuentra la reserva que estamos buscando
    const index = reservas.findIndex(item => item.id === reserva.id);

    //Si encuentra una reserva, esa reserva encontrada pasa a ser la reserva en la que se actualizarán los datos
    if (index > -1){
        reservas[index] = reserva;
        return reserva;
    }else{
        return null;
    }
}

const remove = (id) => {
    //findIndex devuelve el indice de donde se encuentra la reserva que estamos buscando
    const index = reservas.findIndex(item => item.id == id);

    if (index > -1){
        reservas.splice(index,1); //splice elimina los siguientes elementos del arreglo, en este caso, el 1 que es el índice
        return true;
    }else{
        return false;
    }
}
const reservaRepository = {findAll, create, findOne, update, remove}

export default reservaRepository;