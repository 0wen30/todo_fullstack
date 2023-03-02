export default class Tareas {

    constructor(db) {
        this.db = db;
        this.conectar();
    }
    
    async conectar(){
        await this.db.conectar();
        await this.crearTabla();
    }

    async crearTabla() {
        const con = this.db.conexion;
        const sql = `
            CREATE TABLE IF NOT EXISTS Tareas (
                id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
                title VARCHAR(255) NOT NULL, 
                complete BOOLEAN DEFAULT false, 
                created_at DATETIME DEFAULT NOW()
            )`;
        return new Promise((resolve,reject)=>{
            con.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    async insertar(title='uno') {
        const con = this.db.conexion;
        const sql = `INSERT INTO tareas (title) VALUES ('${title}')`;
        return new Promise((resolve, reject) => {
            con.query(sql, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        })
    }

    async buscar() {
        const con = this.db.conexion;
        const sql = "SELECT * FROM tareas";
        return new Promise((resolve, reject) => {
            con.query(sql, function (err, result,fields) {
                if (err) reject(err);
                resolve({result,fields});
            });
        })
    }

    async buscarPorId(id=1) {
        const con = this.db.conexion;
        const sql = `SELECT * FROM tareas WHERE id = ${id}`;
        return new Promise((resolve, reject) => {
            con.query(sql, function (err, result,fields) {
                if (err) reject(err);
                resolve({result,fields});
            });
        })
    }

    async actualizar(id=1,title,completed) {
        const con = this.db.conexion;
        let sql = '';
        if (title && completed)
            sql = `UPDATE tareas SET title = '${title}', complete = ${completed} WHERE id = ${id} `;
        else if (title)
            sql = `UPDATE tareas SET title = '${title}' WHERE id = ${id} `;
        else if (completed){
            sql = `UPDATE tareas SET complete = ${completed} WHERE id =${id} `;
        }
        return new Promise((resolve, reject) => {
            con.query(sql, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        })
    }

    async eliminar(id=1) {
        const con = this.db.conexion;
        const sql = `DELETE FROM tareas WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            con.query(sql, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        })
    }

}