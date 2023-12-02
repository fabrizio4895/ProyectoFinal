import modelo from '../model/libro.js'

let libros = []

const findAll = async () => {
    try{
        return await modelo.findAll();
    }catch(err){
        console.error(err);
        return null;
    }
}

const create = async(libro) => {
    try{
        return await modelo.create()
    }catch(err){
        console.error(err);
        return null;
    }
}

const findOne = (id) => {
    const result = libros.find(x => x.id == id);
    return result;
}

const update = (libro) => {
    //findIndex devuelve el indice de donde se encuentra el libro que estamos buscando
    const index = libros.findIndex(item => item.id === libro.id);

    //Si encuentra un libro, ese libro encontrado pasa a ser el libro que se actualizarán sus datos
    if (index > -1){
        libros[index] = libro;
        return libro;
    }else{
        return null;
    }
}

const remove = (id) => {
    //findIndex devuelve el indice de donde se encuentra el libro que estamos buscando
    const index = libros.findIndex(item => item.id == id);

    if (index > -1){
        libros.splice(index,1); //splice elimina los siguientes elementos del arreglo, en este caso, el 1 que es el índice
        return true;
    }else{
        return false;
    }
}
const libroRepository = {findAll, create, findOne, update, remove}

export default libroRepository;