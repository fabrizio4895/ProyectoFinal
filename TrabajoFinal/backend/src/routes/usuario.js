import express from 'express';
import usuarioController from '../controllers/usuario.js';
//Esta son las rutas de endpoints de cada página

//Permite definir las rutas
const routes = express.Router()

routes.get('/', usuarioController.findAll ) //localhost:3001/usuario
routes.post('/', usuarioController.create )
routes.get('/:id', usuarioController.findOne)
routes.put('/', usuarioController.update)
routes.delete('/:id', usuarioController.remove)

export default routes;