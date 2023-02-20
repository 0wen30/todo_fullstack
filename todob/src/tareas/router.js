import { Router } from "express";
import { eliminar, insertar, modificar, obtener, obtenerPorId } from "./controlador.js";

const tareasRouter = Router();

tareasRouter.get('/',obtener);
tareasRouter.get('/:id',obtenerPorId);
tareasRouter.post('/',insertar);
tareasRouter.put('/:id',modificar);
tareasRouter.delete('/:id',eliminar);

export default tareasRouter;