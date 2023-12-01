let libros = [
    {
        id:1,
        formato: "Libro físico",
        autor: "Joyce dunbar",
        editorial: "Edebé",
        categoria: "Infantil y juvenil",
        anio: "2007",
        idioma: "Español",
        nroPaginas: "104",
        encuadernacion: "Tapa blanda",
        ISBN13: "9788423687572",
        imagenPortadaURL: "https://images.cdn2.buscalibre.com/fit-in/180x180/1f/a6/1fa666e0f93fb0bc63c4c214188f3a46.jpg",
        titulo: "Software la Superbabosa",
        urlCompra: "https://www.buscalibre.pe/libro-software-la-superbabosa/9788423687572/p/2858249"
    },
    {
        id:2,
        formato: "Libro físico",
        autor: "Flores masias, eward; huarote zegarra, raul",
        editorial: "Fondo editorial universidad césar vallejo",
        categoria: "Ingenieria",
        anio: "2019",
        idioma: "Español",
        nroPaginas: "128",
        encuadernacion: "Tapa blanda",
        ISBN13: "9786124435058",
        imagenPortadaURL: "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        titulo: "Gestion de proyecto de Software",
        urlCompra: "https://www.buscalibre.pe/libro-gestion-de-proyecto-de-software/9786124435058/p/54600899"
    }
]

const findAll = () => {
    return libros;
}

const create = (libro) => {
    libros.push(libro)
    return libro;
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