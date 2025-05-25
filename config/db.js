const mysql = require('mysql2/promise');
require('dotenv').config();

async function connect() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        })

        console.log("✅ Conexão bem-sucedida com o banco de dados!");

        const [rows] = await connection.query("SELECT 1 + 1 AS resultado");
            console.log("Teste de query:", rows[0]);

        return connection;

    } catch (err) {
        console.error("❌ Erro ao conectar com o banco de dados:", err.message);
    }
}

module.exports = connect;