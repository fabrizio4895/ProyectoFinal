import express from 'express';
import reservaController from '../controllers/reserva.js';
//Esta son las rutas de endpoints de cada página

//Permite definir las rutas
const routes = express.Router()

routes.get('/', reservaController.findAll ) //localhost:3001/reserva
routes.post('/', reservaController.create )
routes.get('/:id', reservaController.findOne)
routes.put('/', reservaController.update)
routes.delete('/:id', reservaController.remove)

export default routes;