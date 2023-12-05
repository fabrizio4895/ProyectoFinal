import { Datatypes } from 'sequelize';
import sequelize from '../config/database.js';

const Reserva = sequelize.define('reserva',{
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: Datatypes.STRING
    }
})

export default Libro;