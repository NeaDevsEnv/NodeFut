import { Router } from "express";
import { getPersonas , createPersonas, getPersonasById, deletePersonasById, getTotalPersonas, putPersonasById} from  '../controllers/product.controllers'

const routes = Router();

routes.get('/personas', getPersonas)

routes.post('/personas', createPersonas);

routes.get('/personas/count', getTotalPersonas);


routes.get('/personas/:id', getPersonasById);

routes.delete('/personas/:id', deletePersonasById);



routes.put('/personas/:id', putPersonasById);


export default routes;