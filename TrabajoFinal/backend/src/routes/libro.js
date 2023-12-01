import express from 'express';
import libroController from '../controllers/libro.js';
//Esta son las rutas de endpoints de cada página

//Permite definir las rutas
const routes = express.Router()

routes.get('/', libroController.findAll ) //localhost:3001/libro
routes.post('/', libroController.create )
routes.get('/:id', libroController.findOne)
routes.put('/', libroController.update)
routes.delete('/:id', libroController.remove)

export default routes;