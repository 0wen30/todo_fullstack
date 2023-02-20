import Tareas from "./model.js";

const newTarea = new Tareas();

export const obtener = async(req, res) => {
    const {result,field} = await newTarea.buscar();
    const data = result.map(el=>({ id:el.id,title:el.title,complete:el.complete,created_at:el.created_at }))
    return res.json(data);
}
export const insertar = async(req, res) => {
    const { title } = req.body;
    const result = await newTarea.insertar(title);
    return res.json(result);
}
export const obtenerPorId = async(req, res) => {
    const { id } = req.params;
    const {result,field} = await newTarea.buscarPorId(id);
    const [data] = result.map(el=>({ id:el.id,title:el.title,complete:el.complete,created_at:el.created_at }))
    return res.json(data);
}
export const modificar = async(req, res) => {
    const { id } = req.params;
    const { title,completed } = req.body;
    const result = await newTarea.actualizar(id,title,completed);
    return res.json(result);
}
export const eliminar = async(req, res) => {
    const { id } = req.params;
    const result = await newTarea.eliminar(id);
    return res.json(result);
}