import { createConnection } from 'mysql';

export default class Conexion {

    constructor() {
        if (Conexion.prototype._singletonIntance) {
            return Conexion.prototype._singletonIntance;
        }
        Conexion.prototype._singletonIntance = this;
        this.bdd = 'test';
        this.host = "localhost";
        this.user = "root";
        this.pass = "";
        this.conexion = createConnection({
            host: this.host,
            user: this.user,
            password: this.pass,
            database: this.bdd
        });
    }

    async conectar() {
        return new Promise((resolve,reject) => {
            this.conexion.connect(function (err) {
                if (err) reject(err);
                resolve("Connected!");
            });
        });
    }

    desconectar() {
        this.conexion.destroy();
    };

}