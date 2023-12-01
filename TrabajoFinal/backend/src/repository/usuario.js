let usuarios = [
{
    id:1,
    nombre:"Fabrizio",
    apellido:"Clomer",
    tipoDocumento:"DNI",
    NumDoc:"71705287",
    correo:"fabrizioclomer21@hotmail.com",
    contraseña:"12345"
},{
    id:2,
    nombre:"Sasha",
    apellido:"Sanchez",
    tipoDocumento:"DNI",
    NumDoc:"87534218",
    correo:"Sasha1@hotmail.com",
    contraseña:"1234"
}]

const findAll = () => {
    return usuarios;
}

const create = (usuario) => {
    usuarios.push(usuario)
    return usuario;
}

const findOne = (id) => {
    const result = usuarios.find(x => x.id == id);
    return result;
}

const update = (usuario) => {
    //findIndex devuelve el indice de donde se encuentra el usuario que estamos buscando
    const index = usuarios.findIndex(item => item.id === usuario.id);

    //Si encuentra un usuario, ese usuario encontrado pasa a ser el usuario que se actualizarán sus datos
    if (index > -1){
        usuarios[index] = usuario;
        return usuario;
    }else{
        return null;
    }
}

const remove = (id) => {
    //findIndex devuelve el indice de donde se encuentra el usuario que estamos buscando
    const index = usuarios.findIndex(item => item.id == id);

    if (index > -1){
        usuarios.splice(index,1); //splice elimina los siguientes elementos del arreglo, en este caso, el 1 que es el índice
        return true;
    }else{
        return false;
    }
}
const usuarioRepository = {findAll, create, findOne, update, remove}

export default usuarioRepository;