"use client"
import { useEffect, useState } from 'react';
import usuarioApi from '../../api/usuario.js';
import libroApi from '../../api/libro.js'

const Reserva = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState(1);

    const [libros, setLibros] = useState([]);
    const [libro, setLibro] = useState(1);

    const [librosReservados, setLibrosReservados] = useState([]);


    const handleOnLoad = async () => {
        const rawUsuarios = await usuarioApi.findAll();
        const rawLibros = await libroApi.findAll();
        setUsuarios(rawUsuarios.data);
        setLibros(rawLibros.data)
    }

    const handleAgregarLibro = () => {
        setLibrosReservados([...librosReservados, {id: libro}])
    }

    useEffect(() => {
        handleOnLoad();
    }, [])
}

export default Reserva;