import { Datatypes } from 'sequelize';
import sequelize from '../config/database.js';

const Libro = sequelize.define('libro',{
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: Datatypes.STRING,
        allowNull: false
    },
    apellido: {
        type: Datatypes.STRING,
        allowNull: false
    },
    tipoDocumento: {
        type: Datatypes.STRING,
        allowNull: false
    },
    nroDeDocumento: {
        type: Datatypes.STRING,
        allowNull: false
    }
})

export default Libro;