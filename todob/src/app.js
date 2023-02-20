import express from "express";
import cors from 'cors'
import tareasRouter from "./tareas/router.js";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/todo',tareasRouter);

export default app;